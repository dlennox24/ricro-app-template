import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import IconApps from 'mdi-material-ui/Apps';
import IconEmail from 'mdi-material-ui/Email';
import IconHelpNetwork from 'mdi-material-ui/HelpNetwork';
import IconLoginVariant from 'mdi-material-ui/LoginVariant';
import React from 'react';

const subheader404 = classes => (
  <React.Fragment>
    <Typography variant="body1" paragraph>
      Unable to find this page. If you believe this to be an error please contact us.
    </Typography>
    <Chip
      avatar={
        <Avatar>
          <IconHelpNetwork />
        </Avatar>
      }
      label={<Typography variant="h6">{window.location.pathname}</Typography>}
      className={classes.chip}
    />
  </React.Fragment>
);

const getErrorObject = ({ classes, code, config, linkedButton, subheader }) => {
  const contactUsButton = {
    icon: <IconEmail className={classes.iconLeft} />,
    title: 'Contact Us',
    link: config.unit.contactHref,
    buttonProps: { variant: 'outlined' },
  };
  const appsButton = { icon: <IconApps className={classes.iconLeft} />, title: 'Apps', link: '/' };

  const errors = {
    401: {
      code: 401,
      title: 'Not Authenticated',
      subheader: 'You must login to view this content.',
      linkedButton: [
        {
          icon: <IconLoginVariant className={classes.iconLeft} />,
          title: 'Login',
          link: `${config.auth.host + config.auth.loginPath}?return=${window.location.href}`,
        },
      ],
    },
    403: {
      code: 403,
      title: 'Forbidden',
      subheader: 'You do not have the correct permissions to access this content.',
      linkedButton: [appsButton, contactUsButton],
    },
    404: {
      code: 404,
      title: 'Not Found',
      subheader: subheader404(classes),
      linkedButton: [appsButton, contactUsButton],
    },
    500: {
      code: 500,
      title: 'Internal Server Error',
      subheader:
        'An error occured. Please try again. If this continues to happen please contact us.',
      linkedButton: [contactUsButton],
    },
  };

  const error = errors[code];
  error.linkedButton = linkedButton || error.linkedButton;
  error.subheader = subheader || error.subheader;
  return error;
};

export default getErrorObject;
