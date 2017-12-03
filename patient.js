import React, { Component } from 'react';
import { Header, renderLogin, renderCheckup, renderProfile, renderContact, renderReport } from './index';

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
                <LinkButton title="Check-up questionnaire" target={renderCheckup} />
                <LinkButton title="Check profile" target={renderProfile} />
                <LinkButton title="Latest report" target={renderReport} />
                <LinkButton title="Contact" target={renderContact} />
            </div>
        );
    }
};

class LinkButton extends Component {
    render() {
        return (
            <div className="col-md-3">
                <div className="bgbox clickable" onClick={this.props.target}>
                    <h3>{this.props.title}</h3>
                </div>
            </div>
        );
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