import React, { Component } from 'react';
import { Header, BackToMain } from './index';

export default class ReportPage extends Component {
    render() {
        return (
            <div>
                <Header title="Latest Report" />
                <BackToMain />
            </div>
        )
    }
};