import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Drawer from './Drawer';
import { Link } from 'react-router-dom';
import ReactLogo from '../img/ReactLogo.png'


const useStyles = makeStyles(() => ({
    typostyle: {
        flex: 1,
        fontSize: 18,
    }
}));

function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Drawer />
                <Link to='/'><img src={ReactLogo} width='70' height='50' /></Link>
                <Typography className={classes.typostyle}>React Project</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header