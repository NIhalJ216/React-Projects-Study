import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Grid, Button, TextField, InputLabel } from '@material-ui/core';

export default function Login() {
    const [user, updateUser] = useState("");
    const history = useHistory();

    // "log in" a user
    function handleLogin() {
        localStorage.setItem("user", user);
        history.push("/app");
    }

    // if user already "authenticated", redirect them to the app
    if (localStorage.getItem("user")) {
        alert(
            "You're already authenticated in localStorage and being redirected into the app."
        );
        return <Redirect to={"/app"} />;
    }

    return (
        <Grid style={{ padding: 50 }}>
            <Typography><h1>Log In</h1></Typography>
            <Grid>
                <TextField variant='outlined' value={user} onChange={e => updateUser(e.target.value)} label="Anything will work" />
                <Button variant="contained" color="primary" disabled={!user} onClick={handleLogin}>
                    Log In
                </Button>
            </Grid>
        </Grid>
    );
}