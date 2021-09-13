import React from 'react';
import './App.css';
import Header from './Components/Header';
import Liveclock from './Projects/LiveClock/Liveclock';
import Approuting from './Projects/Routing/Approuting';
import Appreactroute from './Projects/React-Routing/Appreactroute';
import Appredux from './Projects/React Redux/Appredux';
import Apphooks from './Projects/React Hooks useState/Apphooks';
import Apphttp from './Projects/HTTP Responces get post/Apphttp';
import Appgrid from './Projects/Grid Layout/Appgrid';
import Appgetdata from './Projects/GetFormData/Appgetdata';
import Appformikvalid from './Projects/Formik validation form/Appformikvalid';
import { Grid, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Home from '@material-ui/icons/Home';

function App() {
  return (
    <Grid container>
      <Router>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Container maxWidth='mb'>
          <Switch>
            <Grid item xs={12}>
              {/*<Route path="/">
                <Home />
              </Route>*/}
              <Route path="/liveclock">
                <Liveclock />
              </Route>
              <Route path="/approuting">
                <Approuting />
              </Route>
              <Route path="/appreactroute">
                <Appreactroute />
              </Route>
              <Route path="/appredux">
                <Appredux />
              </Route>
              <Route path="/apphooks">
                <Apphooks />
              </Route>
              <Route path="/apphttp">
                <Apphttp />
              </Route>
              <Route path="/appgrid">
                <Appgrid />
              </Route>
              <Route path="/appgetdata">
                <Appgetdata />
              </Route>
              <Route path="/appformik">
                <Appformikvalid />
              </Route>

            </Grid>
          </Switch>
        </Container>
      </Router>
    </Grid>
  );
}

export default App;
