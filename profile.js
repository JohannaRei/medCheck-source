import React, { Component } from 'react';
import { Header, BackToMain, renderProfile } from './index';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class Profile extends Component {
    constructor(props) 
    {
        super(props);
        this.state = {
            startDate:null,
            changeApp:false,
            nextAppointment: moment("2018-02-25"),
            lastAppointment: moment("2017-11-23")
        };
        this.changeAppointment = this.changeAppointment.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
      this.setState({startDate:moment()})
    }
    changeAppointment() {
        this.setState({changeApp:true});
        renderProfile();
    }
    handleChange(date) {
        this.setState({
          nextAppointment: date
        });
    }
    render() {
        return (
            <div className="container">
                <div className="col-md-8 col-md-offset-2">
                    <div className="col-md-6">
                    lorem
                    </div>
                    <div className="col-md-6 left-align">
                        <h4><strong>Name:</strong> {this.props.name}</h4>
                        <p><strong>Date of Birth:</strong> {this.props.dob}</p>
                    </div>
                    <div style={{paddingTop: '100px'}}>
                        <p><strong>Last appointment:</strong> {this.state.lastAppointment.format('L')}</p>
                        <p><strong>Next appointment:</strong> {this.state.nextAppointment.format('L')} <button className="btn-primary" onClick={this.changeAppointment}>Change</button></p>
                        {this.state.changeApp ? <div><strong>New appointment date:</strong> <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        /></div> : null}
                    </div>
                </div>
            </div>
        )
    }
};

export default class ProfilePage extends Component {
    render() {
        return (
            <div>
                <Header title="Irmeli Korhonen" />
                <Profile name="Irmeli Päivikki Korhonen" dob="3.5.1934" lastAppointment="25.11.2017" nextAppointment="8.2.2018" />
                <BackToMain />
            </div>
        )
    }
};