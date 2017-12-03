import React, { Component } from 'react';
import { Header, BackToMain } from './index';

export default class ThankYouPage extends Component {
    render() {
        return (
            <div>
                <Header title="Thank you!" />
                <BackToMain />
            </div>
        )
    }
};