import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const ROUTES = [
    {
        path: "/",
        key: "ROOT",
        exact: true,
        component: () => <h1>Home Page</h1>
    },
    {
        path: "/app",
        key: "APP",
        component: RenderRoutes,
        routes: [
            {
                path: "/app",
                key: "APP_ROOT",
                exact: true,
                component: () => <h1>Profile</h1>,
            },
            {
                path: "/app/page",
                key: "APP_PAGE",
                exact: true,
                component: () => <h1>About</h1>,
            },
        ],
    },
];

export default ROUTES;

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={props => <route.component {...props} routes={route.routes} />}
        />
    );
}

export function RenderRoutes({ routes }) {
    return (
        <Switch>
            {routes.map((route, i) => {
                return <RouteWithSubRoutes key={route.key} {...route} />;
            })}
            <Route component={() => <h1>Not Found!</h1>} />
        </Switch>
    );
}