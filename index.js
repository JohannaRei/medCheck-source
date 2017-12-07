import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import PatientPage from './patient';
import LoginPage from './login';
import CheckupPage from './checkup';
import ProfilePage from './profile';
import PrescriptionPage from './prescriptions';
import ContactPage from './contact';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="navbar">{this.props.isFrontPage ? null : <button className="navbar-header btn-white" onClick={renderLogin}>Log out</button>}</div>            
                <div className="jumbotron">
                    <h1>{this.props.title}</h1>
                    <h3>{this.props.subtitle}</h3>
                </div>
            </div>
        )
    }
};

class Section extends Component {
    render() {
        return (
            <div className="questionbox">
                <h4>{this.props.text}</h4>
                {this.props.subtext}
                {this.props.more}
            </div>
        );
    }
};

const BackToMain = props => <div className="col-md-2 col-md-offset-5"><button className="btn-basic" onClick={renderPatient}>Back to front page</button></div>;

const root = document.getElementById('root');

const renderPatient = () => ReactDOM.render(<PatientPage />, root);
const renderLogin = () => ReactDOM.render(<LoginPage />, root);
const renderCheckup = () => ReactDOM.render(<CheckupPage />, root);
const renderProfile = () => ReactDOM.render(<ProfilePage />, root);
const renderPrescriptions = () => ReactDOM.render(<PrescriptionPage />, root);
const renderContact = () => ReactDOM.render(<ContactPage />, root);

renderLogin();
registerServiceWorker();

export { Header, renderLogin, renderContact, renderCheckup, renderProfile, renderPrescriptions, renderPatient, BackToMain, Section };


