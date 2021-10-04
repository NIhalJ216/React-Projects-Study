import React from 'react';
import { Link, useHistory } from "react-router-dom";
import ROUTES, { RenderRoutes } from "./Components/Routes";
import { Grid, Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  typography: {
    marginTop: 30,
  }
});

function Appreactroute() {
  const classes = useStyles()
  //   const history = useHistory();

  //   function logout() {
  //     localStorage.removeItem("user");
  //     history.push("/");
  //   }


  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='h5' className={classes.typography}>Implemented in Project</Typography>
        {/*displayRouteMenu(ROUTES)*/}
        {/*<Button variant="contained" color="primary" onClick={logout}>Log Out</Button>*/}
      </Grid>
      <Grid item style={{ padding: '20px' }}>
        {/*<RenderRoutes routes={ROUTES} />*/}
      </Grid>
    </Grid>
  );
}
export default Appreactroute;

/**
 * Render a nested hierarchy of route configs with unknown depth/breadth
 */
function displayRouteMenu(routes) {
  /**
   * Render a single route as a list item link to the config's pathname
   */
  function singleRoute(route) {
    return (
      <li key={route.key}>
        <Link to={route.path}>
          {route.key} ({route.path})
        </Link>
      </li>
    );
  }

  // loop through the array of routes and generate an unordered list
  return (
    <ul style={{ listStyleType: 'none' }}>
      {
        routes.map(route => {
          // if this route has sub-routes, then show the ROOT as a list item and recursively render a nested list of route links
          if (route.routes) {
            return (
              <React.Fragment key={route.key}>
                {singleRoute(route)}
                {displayRouteMenu(route.routes)}
              </React.Fragment>
            );
          }

          // no nested routes, so just render a single route
          return singleRoute(route);
        })
      }
    </ul >
  );
}