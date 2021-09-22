import React from 'react'
import {
    BrowserRouter as Router, Switch, Route, Link, useHistory
} from "react-router-dom";
import { Grid, Box, Divider, List, ListItem, ListItemText, IconButton } from '@material-ui/core';


function Hookroutes() {
    let history = useHistory();

    return (
        <Grid>
            <Box textAlign='center' p={2}>
                Components
            </Box>
            <Divider />
            <List>
                <ListItem button onClick={() => history.push('/apphooks/usestate')}>
                    <ListItemText primary={'UseState'} />
                </ListItem>
                <ListItem button onClick={() => history.push('/apphooks/usereducer')}>
                    <ListItemText primary={'UseReducer'} />
                </ListItem>
                <ListItem button onClick={() => history.push('/apphooks/useeffect')}>
                    <ListItemText primary={'UseEffect'} />
                </ListItem>
                <ListItem button onClick={() => history.push('/apphooks/useref')}>
                    <ListItemText primary={'UseRef'} />
                </ListItem>
                <ListItem button onClick={() => history.push('/apphooks/uselayeffect')}>
                    <ListItemText primary={'UseLayoutEffect'} />
                </ListItem>
                <ListItem button onClick={() => history.push('/apphooks/useimperative')}>
                    <ListItemText primary={'UseImperativeHandle'} />
                </ListItem>
                <ListItem button onClick={() => history.push('/apphooks/usecontext')}>
                    <ListItemText primary={'UseContext'} />
                </ListItem>
                <ListItem button onClick={() => history.push('/apphooks/usememo')}>
                    <ListItemText primary={'UseMemo'} />
                </ListItem>
                <ListItem button onClick={() => history.push('/apphooks/usecallback')}>
                    <ListItemText primary={'UseCallback'} />
                </ListItem>
            </List>
        </Grid>
    )
}

export default Hookroutes
