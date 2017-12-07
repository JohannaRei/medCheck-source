import React, { Component } from 'react';
import { Header, renderLogin, renderCheckup, renderProfile, renderContact, renderPrescriptions } from './index';
import listPic from './images/list.svg';
import userPic from './images/user2.svg';
import pillPic from './images/pills.svg';
import contactPic from './images/contact.svg';

class Notifications extends Component {
    render() {
        return (
            <div className="speech">
                <span className="speech-bubble clickable" onClick={renderCheckup}>
                    You have a new check-up questionnaire!
                </span>
            </div>    
        );
    }
};

class Links extends Component {
    render() {
        return (
            <div>
                <LinkButton image={listPic} title="Check-up questionnaire" target={renderCheckup} />
                <LinkButton image={userPic} title="Check profile" target={renderProfile} />
                <LinkButton image={pillPic} title="Prescriptions" target={renderPrescriptions} />
                <LinkButton image={contactPic} title="Contact" target={renderContact} />
            </div>
        );
    }
};

class LinkButton extends Component {
    render() {
        return (
            <div className="col-md-3">
                <div className="bgbox clickable" onClick={this.props.target}>
                    <img alt="img" src={this.props.image} height="80%"/>
                </div>
                <h3>{this.props.title}</h3>
            </div>
        );
    }
};

// figure this out
class CreditFooter extends Component {
    render() {
        return (
            <div className="foot">
                <small>All icons from <a href="https://flaticon.com" target="_blank" rel="noopener noreferrer">flaticon</a></small>
            </div>
        )
    }
};

export default class PatientPage extends Component {
    render() {
        return (
            <div>
                <Header title="Welcome, Irmeli!" />
                <Notifications />
                <Links />
            </div>
        )
    }
};