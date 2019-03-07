import React from "react";
import { Link, Route } from "react-router-dom";
import Public from "./Public";
import LogIn from "./LogIn";
import Admin from "./Admin";
import Welcome from "./Welcome";
import PrivateRoute from "./PrivateRoute";

const Routes = () => (
    <div>
        <h1>Routes here</h1>
        <ul>
            <li>
                <Link to="/public">PUBLIC PAGE</Link>
            </li>
            <li>
                <Link to="/protected/admin">ADMIN PAGE</Link>
            </li>
            <li>
                <Link to="/protected/welcome">WELCOME CUSTOMER PAGE</Link>
            </li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/login" component={LogIn} />
        <PrivateRoute path="/protected/admin" component={Admin} />
        <PrivateRoute path="/protected/welcome" component={Welcome} />
    </div>
);

export default Routes;
