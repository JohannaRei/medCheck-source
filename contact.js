import React, { Component } from 'react';
import { Header, BackToMain } from './index';
import leevi from './images/leevi.png';
import vera from './images/vera.png';

class Contact extends Component {
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <div className="profilebox">
                        <h2 className="left-align">{this.props.title} {this.props.name}</h2>
                    <div className="profile-image">
                        <img className="marg-right" align="left" alt={this.props.name} src={this.props.image}/>
                    </div>
                    <div className="profile-info">
                        <h4>Appointment hours {this.props.hours}</h4>
                        <h4>Telephone number {this.props.telephone}</h4>
                    </div>
                </div>
            </div>

        )
    }
};

export default class ContactPage extends Component {
    render() {
        return (
            <div>
                <Header title="Contact" />
                <div className="container">
                    <Contact title="Doctor" name="Leevi Isoaho" hours="mon-sat 9.00-23.00" telephone="+358 040837567" image={leevi} />
                    <Contact title="Pain Specialist" name="Vera Ranta" hours="tue-fri 7.00-17.00" telephone="+358 040837567" image={vera} />
                </div>
                <BackToMain />
            </div>
        )
    }
};