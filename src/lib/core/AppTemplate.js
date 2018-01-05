import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  withStyles,
} from 'material-ui/styles';

import Footer from './Footer';
import CsuUnitHeader from './CsuUnitHeader';
import IeWarning from './IeWarning';
import AppWrapper from './appWrapper/AppWrapper';

const styles = theme => ({
  '@global': {
    body: {
      margin: 0,
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      fontFamily: '\'prox-regular\', \'Helvetica\', \'Arial\', sans-serif',
    },
    a: {
      color: theme.palette.secondary[500],
      '&:hover': {
        color: theme.palette.primary[500],
      }
    },
    code: {
      borderRadius: 0,
      backgroundColor: theme.palette.grey[200],
      color: theme.palette.grey[800],
    },
    pre: {
      padding: '5px 10px',
      backgroundColor: theme.palette.grey[200],
      borderLeft: '4px solid ' + theme.palette.csuBrand.primary.green,
      color: theme.palette.grey[800],
    },
    hr: {
      background: theme.palette.csuBrand.primary.gold,
      height: '.1rem',
      margin: 0,
    },
    '.listItemLink': {
      color: theme.palette.common.lightBlack,
      '&:hover': {
        color: theme.palette.common.lightBlack,
        textDecoration: 'none',
      },
    },
    '.sideNavSubMenu': {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    '.sideNavSubMenuClosed': {
      transition: theme.transitions.create('wdith', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  }
});

class AppTemplate extends Component {
  render() {
    const {
      classes,
      config,
      disableGutters,
      style,
      children,
      sideNav
    } = this.props;
    return (
      <div className={classes.root}>
        <CsuUnitHeader unit={config.unit}/>
        <AppWrapper config={config} sideNav={sideNav}>
          <div
            id='main-content'
            className={!disableGutters ? 'container-fluid p-4' : undefined}
            style={style}
            >
            <IeWarning/>
            {children}
          </div>
        </AppWrapper>
        <Footer/>
      </div>
    );
  }
}

AppTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  disableGutters: PropTypes.bool,
  reduxMiddleware: PropTypes.func,
  sideNav: PropTypes.func,
};

export default withStyles(styles)(AppTemplate);