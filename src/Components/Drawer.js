import React, { useState } from 'react';
import { Grid, Box, SwipeableDrawer, List, Divider, ListItem, ListItemText, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import {
    BrowserRouter as Router, Switch, Route, Link, useHistory
} from "react-router-dom";

const useStyle = makeStyles({
    list: {
        width: 250,
    }
})

export default function Drawer() {
    const [open, setOpen] = useState(false);
    const classes = useStyle();
    let history = useHistory();
    return (
        <Grid>
            <IconButton
                edge='start'
                color='inherit'
                aria-label='open Drawer'
                onClick={() => setOpen(true)}
            >
                <MenuIcon />
            </IconButton>
            <SwipeableDrawer
                anchor='left'
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => { }}
            >
                <Grid className={classes.list}>
                    <Box textAlign='center' p={2}>
                        Components
                    </Box>
                    <Divider />
                    <List>
                        <ListItem button onClick={() => history.push('/approuting')}>
                            <ListItemText primary={'Routing'} />
                        </ListItem>
                        <ListItem button onClick={() => history.push('/liveclock')}>
                            <ListItemText primary={'LiveClock'} />
                        </ListItem>
                        <ListItem button onClick={() => history.push('/appreactroute')}>
                            <ListItemText primary={'React-Routing'} />
                        </ListItem>
                        <ListItem button onClick={() => history.push('/appredux')}>
                            <ListItemText primary={'ReduxStore'} />
                        </ListItem>
                        <ListItem button onClick={() => history.push('/apphooks')}>
                            <ListItemText primary={'React-Hooks'} />
                        </ListItem>
                        <ListItem button onClick={() => history.push('/apphttp')}>
                            <ListItemText primary={'Http API Responces'} />
                        </ListItem>
                        <ListItem button onClick={() => history.push('/appgrid')}>
                            <ListItemText primary={'Grid layout'} />
                        </ListItem>
                        <ListItem button onClick={() => history.push('/appgetdata')}>
                            <ListItemText primary={'GetForm Data'} />
                        </ListItem>
                        <ListItem button onClick={() => history.push('/appformik')}>
                            <ListItemText primary={'Form with Formik'} />
                        </ListItem>
                    </List>
                </Grid>
            </SwipeableDrawer>
        </Grid>
    )
}
