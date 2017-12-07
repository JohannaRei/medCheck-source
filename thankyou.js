import React, { Component } from 'react';
import { Header, BackToMain } from './index';

export default class ThankYouPage extends Component {
    render() {
        return (
            <div>
                <Header title="Thank you!" />
                <p>Your answers have been submitted.</p>
                <BackToMain />
            </div>
        )
    }
};