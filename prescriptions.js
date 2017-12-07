import React, { Component } from 'react';
import { Header, Section, BackToMain } from './index';

const Medications = props => (
    <div>
        <div className="col-md-6 col-md-offset-3">
            <div className="medbox"><Section text="Tramal Retard 200mg" subtext="Instructions: take 3 times a day with food." more={<p><a href="https://laakeinfo.fi/Medicine.aspx?m=2433&i=ORION+PHARMA_TRAMAL+RETARD" target="_blank" rel="noopener noreferrer">More information</a></p>} /></div>
            <div className="medbox"><Section text="Gabapentin Ratiopharm 800mg" subtext="Instructions: take when needed (maximum two pills per day)." more={<p><a href="http://spc.nam.fi/indox/english/html/nam/humspc/6/10007756.pdf" target="_blank" rel="noopener noreferrer">More information</a></p>} /></div>
        </div>
    </div>
);

export default class PrescriptionPage extends Component {
    render() {
        return (
            <div>
                <Header title="Your prescriptions" />
                <Medications />
                <BackToMain />
            </div>
        )
    }
};