/* global jest */
import React from 'react';
import ReactDOM from 'react-dom';
import LoginWrapper from '../core/loginWrapper/LoginWrapper';
import App from '../components/App';
import defaults from '../assets/defaults.json';

jest.mock(
  'popper.js',
  () =>
    class Popper {
      static placements = [
        'auto',
        'auto-end',
        'auto-start',
        'bottom',
        'bottom-end',
        'bottom-start',
        'left',
        'left-end',
        'left-start',
        'right',
        'right-end',
        'right-start',
        'top',
        'top-end',
        'top-start',
      ];

      constructor() {
        return {
          destroy: () => {},
          scheduleUpdate: () => {},
        };
      }
    },
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <App config={defaults}>
      <LoginWrapper
        api={defaults.api}
        onLogin={() => {}}
        onLogout={() => {}}
        userDefaultProfileImg={'test'}
      />
    </App>,
    div,
  );
});
