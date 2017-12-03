import React, { Component } from 'react';
import { Header, Section, BackToMain } from './index';

const Medications = props => (
    <div>
        <Section text="Current prescriptions:" subtext={<div><Medication name="Tramadol 300mg" often="3"/><Medication name="Gabapentin 800mg" often="2" /></div>} />
    </div>
);

class Medication extends Component {
    render() {
        return (
            <div>
                <h5><strong>{this.props.name}</strong></h5>
                <p>Instructions: take {this.props.often} times a day.</p>
            </div>
        )
    }
};

export default class ProfilePage extends Component {
    render() {
        return (
            <div>
                <Header title="Irmeli Korhonen" />
                <Medications />
                <BackToMain />
            </div>
        )
    }
};