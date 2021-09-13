import { Grid, Button, Container } from '@material-ui/core';
import ROUTES, { RenderRoutes } from "./Routes";
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Approuting() {
  return (
    <Router>
      <Grid container xs={12}>
        <Sidebar />
        <Grid item xs={12}>
          <Container maxWidth='md'>
            <Grid item xs={12}>
              <Switch>
                <Route path=''>
                  <RenderRoutes routes={ROUTES} />
                </Route>
              </Switch>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Router>
  );
}

export default Approuting;
