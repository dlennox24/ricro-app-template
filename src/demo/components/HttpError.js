import React, {
  Component,
} from 'react';
import {
  withStyles,
} from 'material-ui/styles';
import {
  MenuItem
} from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import HttpError from '../../lib/HttpError';
import config from '../config.json';

const styles = theme => ({
  textField: {},
  menu: {
    width: 200,
  },
  button: {
    margin: 8,
  },
});

class SnackbarTest extends Component {
  state = {
    code: 401,
  }

  updateState = key => event => {
    this.setState({
      [key]: event.target.value,
    });
  }

  render() {
    const {
      classes
    } = this.props;

    const {
      code
    } = this.state;

    return (
      <div>
        <TextField
          label="Error Code"
          className={classes.textField}
          value={code}
          onChange={this.updateState('code')}
          margin="normal"
          select
          >
          <MenuItem value={401}>401 - Unauthenticated</MenuItem>
          <MenuItem value={403}>403 - Forbidden</MenuItem>
          <MenuItem value={404}>404 - Not Found</MenuItem>
          <MenuItem value={500}>500 - Internal Server Error</MenuItem>
        </TextField>
        <Paper className='p-4'>
          <HttpError code={Number(code)} config={config} />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(SnackbarTest);