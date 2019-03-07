import React from "react";
import { withRouter } from "react-router-dom";
import authService from "../utils/auth";

const AuthButton = withRouter(({ history }) =>
    authService.isAuthenticated ? (
        <p>
            Welcome!{" "}
            <button
                onClick={() => {
                    authService.signOut(() => history.push("/"));
                }}
            >
                Sign Out
            </button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    )
);

export default AuthButton;
