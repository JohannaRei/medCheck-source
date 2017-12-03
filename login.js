import React, { Component } from 'react';
import { Header, renderPatient, renderLogin } from './index';

let loginLoads = 0;

class LoginForm extends Component {
    userLogin(event) {
        event.preventDefault();
        let user = event.target.elements.username.value;
        let passw = event.target.elements.password.value;
        //login would obviously not be done like this in reality
        if (user === 'patient' && passw === 'password') {
            renderPatient();
        } else {
            event.target.elements.username.value = '';
            event.target.elements.password.value = '';
            loginLoads++;
            renderLogin();
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.userLogin}>
                    <h4>Please log in with your<br/>username and password</h4>
                    <input type="text" name="username" placeholder="username"></input><br/>
                    <input type="text" name="password" placeholder="password"></input><br/>
                    <button className="btn-primary" type="submit">Log in</button>
                </form>
            </div>
        );
    }
};

class Errors extends Component {
    getErrors() {
        if (loginLoads > 0) {
            return <p><strong>Error:</strong> Username and/or password was incorrect, please try again!</p>;
        }
    }
    render() {
        return (
            <div>{this.getErrors()}</div>
        )
    }
};

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <Header title="Welcome to MedCheck" subtitle="Your online follow-up care" isFrontPage={true} />
                <LoginForm />
                <Errors />
                <h4>Example credentials</h4>
                <p>username: patient</p>
                <p>password: password</p>
            </div>
        )
    }
};