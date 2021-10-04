import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Components/Home'
import Liveclock from '../Projects/LiveClock/Liveclock';
import Appreactroute from '../Projects/React-Routing/Appreactroute';
import Appredux from '../Projects/React Redux/Appredux';
import Usestate from '../Projects/React Hooks useState/Components/Usestate';
import Usereducer from '../Projects/React Hooks useState/Components/Usereducer';
import Useeffect from '../Projects/React Hooks useState/Components/Useeffect';
import Useref from '../Projects/React Hooks useState/Components/Useref';
import Uselayouteffect from '../Projects/React Hooks useState/Components/Uselayouteffect';
import Useimperative from '../Projects/React Hooks useState/Components/Useimperative';
import Usecontext from '../Projects/React Hooks useState/Components/Usecontext';
import Usememo from '../Projects/React Hooks useState/Components/Usememo';
import Usecallback from '../Projects/React Hooks useState/Components/Usecallback';
import PostForm from '../Projects/HTTP Responces get post/components/PostForm';
import PostList from '../Projects/HTTP Responces get post/components/PostList';
import Appgrid from '../Projects/Grid Layout/Appgrid';
import Appformikvalid from '../Projects/Formik validation form/Appformikvalid';
import Appgetdata from '../Projects/GetFormData/Appgetdata';
import Appregex from '../Projects/Regex/Appregex';
// https://www.ryanjyost.com/react-routing/


const Routes = [
    { path: "/", key: "Home", exact: true, component: Home },
    { path: "/routing", key: "Routing", exact: true, component: Appreactroute },
    { path: "/liveclock", key: "Live-Clock", exact: true, component: Liveclock },
    { path: "/appredux", key: "Redux-Store", exact: true, component: Appredux },
    {
        path: "/reacthooks",
        key: "React-Hooks",
        component: RenderRoutes,
        routes: [
            {
                path: "/reacthooks/usestate",
                key: "useState",
                exact: true,
                component: Usestate,
            },
            {
                path: "/reacthooks/usereducer",
                key: "useReducer",
                exact: true,
                component: Usereducer,
            },
            {
                path: "/reacthooks/useeffect",
                key: "useEffect",
                exact: true,
                component: Useeffect,
            },
            {
                path: "/reacthooks/useref",
                key: "useRef",
                exact: true,
                component: Useref,
            },
            {
                path: "/reacthooks/uselayouteffect",
                key: "useLayoutEffect",
                exact: true,
                component: Uselayouteffect,
            },
            {
                path: "/reacthooks/useimperative",
                key: "useImperative",
                exact: true,
                component: Useimperative,
            },
            {
                path: "/reacthooks/usecontext",
                key: "useContext",
                exact: true,
                component: Usecontext,
            },
            {
                path: "/reacthooks/usememo",
                key: "useMemo",
                exact: true,
                component: Usememo,
            },
            {
                path: "/reacthooks/usecallback",
                key: "useCallback",
                exact: true,
                component: Usecallback,
            },
        ],
    },
    { path: "/grid", key: "Grid-Layout", exact: true, component: Appgrid },
    {
        path: "/api",
        key: "Api-response",
        component: RenderRoutes,
        routes: [
            {
                path: "/api/postform",
                key: "Post-Form",
                exact: true,
                component: PostForm,
            },
            {
                path: "/api/postlist",
                key: "Post-List",
                exact: true,
                component: PostList,
            },
        ],
    },
    { path: "/formikform", key: "Formik-Form-Validation", exact: true, component: Appformikvalid },
    { path: "/getdata", key: "Get-Formdata", exact: true, component: Appgetdata },
    { path: "/regex", key: "Regex Validations", exact: true, component: Appregex },
];

export default Routes;

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