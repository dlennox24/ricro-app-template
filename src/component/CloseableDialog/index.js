import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { mdiClose } from '@mdi/js';
import MdiIcon from '@mdi/react';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const CloseableDialog = ({
  children,
  classes,
  fullScreen,
  header,
  headerColor = 'primary',
  ModalProps,
  onClose,
  theme,
  ...dialogProps
}) => {
  const id = `${header.replace(/ /g, '-').toLowerCase()}-header-dialog`;
  return (
    <Dialog
      classes={{ paper: classes.dialogRoot }}
      fullScreen={fullScreen}
      maxWidth="lg"
      onClose={onClose}
      fullWidth
      aria-labelledby={id}
      {...dialogProps}
    >
      <DialogTitle
        classes={{
          root: classes.dialogTitleRoot,
        }}
        disableTypography
      >
        <AppBar position="static" component="div" color={headerColor}>
          <Toolbar>
            <Typography id={id} variant="h5" color="inherit">
              {header}
            </Typography>
            <div className={classes.flex} />
            <Tooltip title="Close Account">
              <IconButton onClick={onClose} color="inherit" aria-label="Close Account">
                <Icon>
                  <MdiIcon path={mdiClose} color={theme.palette[headerColor].contrastText} />
                </Icon>
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </DialogTitle>
      {children}
    </Dialog>
  );
};

CloseableDialog.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object.isRequired, // MUI withStyles()
  dialogProps: PropTypes.object,
  fullScreen: PropTypes.bool.isRequired, // MUI withMobileDialog()
  header: PropTypes.string,
  headerColor: PropTypes.string,
  ModalProps: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired, // MUI withTheme()
};

export default withMobileDialog()(withTheme()(withStyles(styles)(CloseableDialog)));