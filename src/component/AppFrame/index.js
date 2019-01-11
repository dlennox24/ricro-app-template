import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
// import '../../assets/fonts/factoria.css';
// import '../../assets/fonts/proxima.css';
import theme from '../../assets/theme';
import ContentWrapper from '../../core/ContentWrapper';
import Footer from '../../core/Footer';
import Header from '../../core/Header';
import userReducer from '../../core/LoginLogout/reducer';
import createConfig from '../../utils/config/createConfig';
import HttpError from '../HttpError';
import styles from './styles';

const AppFrame = ({
  classes,
  children,
  config = createConfig(),
  disableGutters,
  reducers,
  // eslint-disable-next-line no-underscore-dangle
  reduxMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
}) => {
  if (!config.usedCreateConfigUtil && process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line
    console.warn(
      'AppFrame: Config file validator not used. Reccomend use of createConfig() for config prop',
    );
  }

  // debugger;

  document.title = `${config.app.name} - ${config.unit.name}`;

  const combinedReducers = combineReducers({
    // all top level state objects must have a reducer
    // config should never change, thus return state unchanged
    config: (state = {}) => state,
    user: userReducer,
    ...reducers,
  });

  return (
    <Provider
      store={createStore(combinedReducers, { ...config.defaultState, config }, reduxMiddleware)}
    >
      <MuiThemeProvider theme={theme}>
        <Router basename={process.env.NODE_ENV === 'production' ? config.app.basename : null}>
          <div id="cru-root" className={classes.root}>
            <CssBaseline />
            <Header unit={config.unit} />
            <ContentWrapper app={config.app} disableGutters={disableGutters}>
              <Switch>
                {children}
                <Route component={() => <HttpError code={404} />} />
              </Switch>
            </ContentWrapper>
            <Footer />
          </div>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
};

AppFrame.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired, // MUI withStyles()
  config: PropTypes.object,
  disableGutters: PropTypes.bool,
  reducers: PropTypes.object,
  reduxMiddleware: PropTypes.func,
};

export default withStyles(styles)(AppFrame);
