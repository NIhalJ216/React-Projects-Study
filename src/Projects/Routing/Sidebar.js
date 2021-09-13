import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Drawer as MUIDrawer, List, ListItem, ListItemIcon, ListItemText, } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import ROUTES, { RenderRoutes } from "./Components/Routes";
import { Link } from "react-router-dom";



const useStyles = makeStyles({
    drawer: {
        width: 150,
        marginTop: 87,
    }
});

const Drawer = props => {
    // const { history } = props;
    const classes = useStyles();
    // const itemlist = [
    //     {
    //         text: 'Home',
    //         icon: <HomeIcon />,
    //         onClick: () => history.push('/home')
    //     },
    //     {
    //         text: 'Profile',
    //         icon: <AccountCircleIcon />,
    //         onClick: () => history.push('/profile')
    //     }
    // ];


    return (
        <div className={classes.drawer}>
            <MUIDrawer variant="permanent" >
                <List>
                    {displayRouteMenu(ROUTES)}
                    {/*{itemlist.map((item, index) => {
                        const { text, icon, onClick } = item;
                        return (
                            <ListItem button key={text} onClick={onClick}>
                                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                <ListItemText primary={text} />
                            </ListItem>
                        );
                    })}*/}
                </List>
            </MUIDrawer>
        </div>
    );
};

export default Drawer;

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