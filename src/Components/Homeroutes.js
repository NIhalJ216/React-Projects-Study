import React, { useState } from 'react'
import { Grid, Container, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import { createTheme, makeStyles } from '@material-ui/core/styles';
import Routes, { RenderRoutes } from "./Routes";
import {
    BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
// https://www.ryanjyost.com/react-routing/
const useStyles = makeStyles({
    home1: {
        display: "flex",
        height: "100vh",
        alignItems: "stretch"
    },
    home2: {
        width: '100%',
        maxWidth: 240,
    },
});

function Homeroutes(props) {
    const classes = useStyles(props);
    return (
        <Grid container>
            <Router>
                <Container maxWidth='xl'>
                    <Switch>
                        <Grid item xs={12}>
                            <Grid item className={classes.home1} >
                                <Grid item className={classes.home2}>
                                    {displayRouteMenu(Routes)}
                                </Grid>
                                <Grid item>
                                    <RenderRoutes routes={Routes} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Switch>
                </Container>
            </Router>
        </Grid>
    )
}

export default Homeroutes

function displayRouteMenu(routes) {
    /**
     * Render a single route as a list item link to the config's pathname
     */
    function singleRoute(route) {
        return (
            <List key={route.key}>
                <Link to={route.path}>
                    {route.key}
                </Link>
            </List>
        );
    }

    // loop through the array of routes and generate an unordered list
    return (
        <ul>
            {routes.map(route => {
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
            })}
        </ul>
    );
}
