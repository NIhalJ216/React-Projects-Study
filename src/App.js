import React from 'react';
import './App.css';
import Header from './Components/Header';
import Homeroutes from './Components/Homeroutes';
import { Grid, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Home from './Components/Home';

function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Container maxWidth='mb'>
        <Grid item xs={12}>
          <Homeroutes />
        </Grid>
      </Container>
    </Grid>
  );
}

export default App;
