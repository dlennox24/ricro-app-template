import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from '.';
import committies from '..';

Object.keys(committies).map(committee => {
  test(`${committee} renders with required props`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Avatar committee={committee} />, div);
  });
  return 0;
});
