import React from 'react';
import Homehook from './Homehook';
import Homeapphook from './Components/Homeapphook';
import { Grid, Typography } from '@material-ui/core'
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";

function Apphooks() {
  return (
    <Grid container>
      <Grid item xs={3}>
        <Homehook />
      </Grid>
      <Grid item xs={9} style={{ marginTop: '20px' }}>
        <Router>
          <Switch>
            <Route path='/apphooks/homeapphook'>
              <Homeapphook />
            </Route>
          </Switch>
        </Router>
      </Grid>
    </Grid>
  );
}

export default Apphooks;
