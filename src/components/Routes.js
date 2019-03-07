import React from "react";
import { Link, Route } from "react-router-dom";
import Public from "./components";
import LogIn from "./components";
import Admin from "./components";
import Welcome from "./components";

const Routes = () => (
    <div>
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
        <Route path="/protected/admin" component={Admin} />
        <Route path="/protected/welcome" component={Welcome} />
    </div>
);

export default Routes;
