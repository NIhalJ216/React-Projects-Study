import React, { useState } from 'react';
import { Grid, Box, SwipeableDrawer, List, Divider, ListItem, ListItemText, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    list: {
        width: 250,
    }
})

export default function Drawer() {
    const [open, setOpen] = useState({ open: false });
    const classes = useStyle();
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
                        <ListItem button onClick={() => { }}>
                            <ListItemText primary={'Routing'} />
                        </ListItem>
                        <ListItem button onClick={() => { }}>
                            <ListItemText primary={'LiveClock'} />
                        </ListItem>
                        <ListItem button onClick={() => { }}>
                            <ListItemText primary={'Box'} />
                        </ListItem>
                        <ListItem button onClick={() => { }}>
                            <ListItemText primary={'Cards'} />
                        </ListItem>

                    </List>
                </Grid>
            </SwipeableDrawer>
        </Grid>
    )
}