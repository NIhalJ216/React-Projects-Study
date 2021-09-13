import './App.css';
import { Grid, Button, Container } from '@material-ui/core';
import ROUTES, { RenderRoutes } from "./Components/Routes";
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Grid container xs={12}>
      <Sidebar />
      <Grid item xs={12}>
        <Container maxWidth='md'>
          <Grid item xs={12}>
            <RenderRoutes routes={ROUTES} />
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
