import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import indigo from '@material-ui/core/colors/indigo';

const theme = createTheme({
    palette: {
        primary: {
            main: indigo[300],
        }
    },
});

function Home() {
    return (
        <Grid container>
            <ThemeProvider theme={theme}>
                <Grid item xs={12}>
                    <Typography color='primary' variant='h1' align='center'>Welcome to HomePage</Typography>
                </Grid>
            </ThemeProvider>
        </Grid >
    )
}

export default Home
