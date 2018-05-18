import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  success: {
    '&>div': {
      backgroundColor: theme.palette.alerts.success,
    },
  },
  error: {
    '&>div': {
      backgroundColor: theme.palette.alerts.danger,
    },
  },
  warning: {
    '&>div': {
      color: 'black',
      backgroundColor: theme.palette.alerts.warning,
    },
  },
  info: {
    '&>div': {
      backgroundColor: theme.palette.alerts.info,
    },
  },
  default: {
    '&>div': {},
  },
  icon: {
    paddingRight: '5px',
  },
  messageContainer: {
    display: 'flex',
    alignItems: 'center',
  },
});

export function slideTransition(slideProps, props) {
  props = {
    ...props,
    direction: 'up',
    ...slideProps,
  };
  return <Slide {...props} />;
}

const CsuSnackbar = props => {
  const {
    autoHideDuration,
    classes,
    children,
    onClose,
    noIcon,
    snackbarProps,
    state,
    type,
  } = props;

  let icon;
  switch (type) {
    case 'error':
      icon = 'close';
      break;
    case 'success':
      icon = 'done';
      break;
    case 'info':
      icon = 'info_outline';
      break;
    case 'warning':
      icon = 'warning';
      break;
    default:
      icon = null;
  }

  const message = (
    <div className={classes.messageContainer}>
      {!noIcon && <Icon className={classes.icon}>{icon}</Icon>}
      {children}
    </div>
  );

  let autohide = autoHideDuration;
  if (autoHideDuration === 0) {
    autohide = undefined;
  } else if (autoHideDuration == null) {
    autohide = 6e3; // Default: 6000ms
  }

  return (
    <Snackbar
      classes={{ root: classes[type || 'default'] }}
      open={state.open}
      autoHideDuration={autohide}
      onClose={onClose}
      transition={state.transition}
      SnackbarContentProps={{
        'aria-describedby': 'message',
      }}
      message={<span id="message">{message}</span>}
      {...snackbarProps}
    />
  );
};

CsuSnackbar.propTypes = {
  autoHideDuration: PropTypes.number,
  children: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  noIcon: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  snackbarProps: PropTypes.object,
  state: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['default', 'error', 'success', 'info', 'warning']),
};

export default withStyles(styles)(CsuSnackbar);
