import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import MdiIcon from '@mdi/react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { matchPath, withRouter } from 'react-router-dom';
import { navItemShape } from '../../../assets/propTypes';
import createMuiComponentLink from '../../../utils/createMuiComponentLink';
import SubNavList from '../SubNavList';
import styles from './styles';

const NavList = ({
  classes,
  className,
  depth = 0,
  denseList,
  denseListItem,
  id,
  keyPrefix = 'navList-',
  linkPrefix = '',
  nav,
  theme,
  location,
}) => {
  // debugger; // set active class on active nav items
  return (
    <div id={id} className={classNames(classes.root, className)}>
      {nav.map((list, i) => {
        return (
          <React.Fragment key={`${keyPrefix}${list[0].name}`}>
            <List className={classNames(denseList && classes.subNavList)} dense={denseList}>
              {list.map(navItem => {
                const key = `listItem-${navItem.name}`;
                if (React.isValidElement(navItem)) {
                  return <React.Fragment key={key}>{navItem}</React.Fragment>;
                }

                if (Array.isArray(navItem.subNav)) {
                  return (
                    <SubNavList
                      key={key}
                      depth={depth + 1}
                      navItem={navItem}
                      nested={denseListItem}
                      linkPrefix={linkPrefix}
                    />
                  );
                }

                const active = matchPath(location.pathname, {
                  path: linkPrefix + navItem.link,
                  exact: true,
                });
                return (
                  <ListItem
                    key={key}
                    className={classNames(active && classes.active)}
                    button
                    dense={denseListItem}
                    {...createMuiComponentLink(navItem, linkPrefix)}
                  >
                    {navItem.icon && (
                      <ListItemIcon>
                        <Icon>
                          <MdiIcon path={navItem.icon} color={theme.palette.icon.main} />
                        </Icon>
                      </ListItemIcon>
                    )}
                    <ListItemText primary={navItem.name} />
                  </ListItem>
                );
              })}
            </List>
            {i !== nav.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

NavList.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withStyles()
  className: PropTypes.string,
  denseList: PropTypes.bool,
  denseListItem: PropTypes.bool,
  depth: PropTypes.number,
  id: PropTypes.string,
  keyPrefix: PropTypes.string,
  linkPrefix: PropTypes.string,
  location: PropTypes.object.isRequired, // react-router withRouter()
  nav: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, navItemShape.isRequired])),
  ).isRequired,
  theme: PropTypes.object.isRequired, // MUI withTheme
};

export default withRouter(withStyles(styles, { withTheme: true })(NavList));