import React, { Component } from 'react';
import { Header, BackToMain } from './index';

export default class ContactPage extends Component {
    render() {
        return (
            <div>
                <Header title="Contact" />
                <BackToMain />
            </div>
        )
    }
};