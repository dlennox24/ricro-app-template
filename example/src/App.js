import Typography from '@material-ui/core/Typography';
import AppFrame, { createConfig } from 'colostate-ricro-ui';
import React from 'react';
import config from './assets/config';

const App = () => (
  <AppFrame config={createConfig(config)}>
    <Typography variant="h1">heading h1</Typography>
    <Typography variant="h2">heading h2</Typography>
    <Typography variant="h3">heading h3</Typography>
    <Typography variant="h4">heading h4</Typography>
    <Typography variant="h5">heading h5</Typography>
    <Typography variant="h6">heading h6</Typography>
    <Typography variant="subtitle1">subtitle1</Typography>
    <Typography variant="body1">body1</Typography>
    <Typography variant="body2">body2</Typography>
    <Typography variant="caption">caption</Typography>
    <Typography variant="button">button</Typography>
  </AppFrame>
);

export default App;
