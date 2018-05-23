import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faChrome, faEdge, faFirefox, faSafari } from '@fortawesome/fontawesome-free-brands';
import Dialog from '../components/Dialog';

const styles = theme => ({
  browserIcons: {
    height: 80,
    width: 80,
    margin: theme.spacing.unit,
    marginBottom: 13,
    fontSize: 60,
  },
  browserLinks: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
  browserContainer: {
    textAlign: 'center',
  },
});

class IeWarning extends React.Component {
  state = {
    open: true,
  };

  handleClose = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  detectIeUserAgent = () => {
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf('MSIE ');
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv:11\./)) {
      return true;
    }
    return false;
  };

  render() {
    const { classes } = this.props;

    const browsers = [
      {
        name: 'Google Chrome',
        shortName: 'Chrome',
        icon: faChrome,
        url: 'https://www.google.com/chrome/',
      },
      {
        name: 'Microsoft Edge',
        shortName: 'Edge',
        icon: faEdge,
        url: 'https://www.microsoft.com/en-us/windows/microsoft-edge',
      },
      {
        name: 'Mozilla FireFox',
        shortName: 'FireFox',
        icon: faFirefox,
        url: 'https://www.mozilla.org/en-US/firefox/new/',
      },
      {
        name: 'Apple Safari',
        shortName: 'Safari',
        icon: faSafari,
        url: 'https://www.apple.com/safari/',
      },
    ];

    return !this.detectIeUserAgent() ? null : (
      <div>
        <Dialog
          onClose={this.handleClose}
          open={this.state.open}
          title="Browser Incompatibility Warning"
          muiDialogProps={{
            ignoreBackdropClick: true,
          }}
        >
          <Typography variant="body1">
            We&apos;ve detected that you are using an outdated browser. This application
            doesn&apos;t support this browser. The application may or may not work correctly. It is
            highly recommended that you use one of the following browsers:
          </Typography>
          <Grid container justify="center" alignItems="center" alignContent="center">
            {browsers.map(browser => (
              <Grid key={browser.shortName} item sm className={classes.browserContainer}>
                <a className={classes.browserLinks} href={browser.url}>
                  <IconButton
                    className={classes.browserIcons}
                    aria-label={`Download ${browser.shortName}`}
                  >
                    <FontAwesomeIcon icon={browser.icon} />
                  </IconButton>
                  <Typography variant="title">{browser.name}</Typography>
                </a>
              </Grid>
            ))}
          </Grid>
        </Dialog>
      </div>
    );
  }
}

IeWarning.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IeWarning);