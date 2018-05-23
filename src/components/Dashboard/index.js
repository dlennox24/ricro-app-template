import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

const TabContainer = props => <div>{props.children}</div>;

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  cardHeaderRoot: {
    backgroundColor: theme.palette.primary.main,
  },
  cardHeaderContent: {
    color: theme.palette.common.white,
  },
  flex: {
    flex: 1,
  },
  content: {
    overflowX: 'auto',
  },
  fullWidth: {
    width: '100%',
  },
});

const Dashboard = props => {
  const { alignCARight, cardActions, children, classes, fullWidth, title } = props;
  const cardHeaderClasses = {
    root: classes.cardHeaderRoot,
    content: classes.cardHeaderContent,
  };
  return (
    <Card className={classnames(fullWidth ? classes.fullWidth : '')}>
      <CardHeader
        title={
          <Typography variant="headline" className={classes.cardHeaderContent}>
            {title}
          </Typography>
        }
        classes={cardHeaderClasses}
        color="inherit"
      />
      <CardContent className={classes.content}>{children}</CardContent>
      {cardActions ? (
        <CardActions>
          {alignCARight && <div className={classes.flex} />}
          {cardActions}
        </CardActions>
      ) : null}
    </Card>
  );
};

Dashboard.propTypes = {
  alignCARight: PropTypes.bool,
  cardActions: PropTypes.node,
  children: PropTypes.any,
  classes: PropTypes.object.isRequired,
  fullWidth: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Dashboard);