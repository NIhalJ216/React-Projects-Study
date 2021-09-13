import React from 'react';
import './App.css';
import Header from './Components/Header';
import Liveclock from './Projects/LiveClock/Liveclock'
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Container maxWidth='mb'>
        <Grid item xs={12}>
          <Liveclock />
        </Grid>
      </Container>
    </Grid>
  );
}

export default App;
