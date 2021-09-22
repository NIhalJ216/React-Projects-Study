import React from 'react'
import { Grid, Container, Typography, Button } from '@material-ui/core';
import Hookroutes from './Hookroutes';
import Usestate from './Components/Usestate';
import Usereducer from './Components/Usereducer';
import Useeffect from './Components/Useeffect';
import Useref from './Components/Useref';
import Uselayouteffect from './Components/Uselayouteffect';
import Useimperative from './Components/Useimperative';
import Usecontext from './Components/Usecontext';
import Usememo from './Components/Usememo';
import Usecallback from './Components/Usecallback';
import {
    BrowserRouter as Router, Switch, Route, Link, useHistory
} from "react-router-dom";

function Homehook() {

    const history = useHistory();

    function Home() {
        history.push("/");
    }

    return (
        <Grid container style={{ display: "flex", height: "100vh", alignItems: "stretch" }}>
            <Grid item xs={7} style={{ backgroundColor: "#ffffff", border: '1px solid black' }}>
                <Hookroutes />
                <Button variant="contained" style={{ marginLeft: '20px' }} color="primary" onClick={Home}>Home</Button>
            </Grid>
            <Grid item xs={5} style={{ padding: '20px' }}>
                <Router>
                    <Switch>
                        <Route exact path="/apphooks/usestate">
                            <Usestate />
                        </Route>
                        <Route path="/apphooks/usereducer">
                            <Usereducer />
                        </Route>
                        <Route path="/apphooks/useeffect">
                            <Useeffect />
                        </Route>
                        <Route path="/apphooks/useref">
                            <Useref />
                        </Route>
                        <Route path="/apphooks/uselayeffect">
                            <Uselayouteffect />
                        </Route>
                        <Route path="/apphooks/useimperative">
                            <Useimperative />
                        </Route>
                        <Route path="/apphooks/usecontext">
                            <Usecontext />
                        </Route>
                        <Route path="/apphooks/usememo">
                            <Usememo />
                        </Route>
                        <Route path="/apphooks/usecallback">
                            <Usecallback />
                        </Route>

                    </Switch>
                </Router>
            </Grid>
        </Grid>
    )
}

export default Homehook
