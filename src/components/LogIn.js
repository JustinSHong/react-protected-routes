import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import authService from "../utils/auth";

class Login extends Component {
    state = {
        redirect: false
    };

    login = () => {
        authService.authenticate(() => {
            this.setState(() => ({
                redirect: true
            }));
        });
    };

    render() {
        const { from } = this.props.location.state || {
            from: { pathname: "/" }
        };
        const { redirect } = this.state;

        if (redirect === true) {
            return <Redirect to={from} />;
        }

        return (
            <div>
                <h1>LogIn</h1>
                <button onClick={this.login}>Log In Here</button>
            </div>
        );
    }
}

export default Login;
