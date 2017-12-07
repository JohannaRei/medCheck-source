import 'rc-slider/assets/index.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Header, Section, renderCheckup, BackToMain } from './index';
import ThankYouPage from './thankyou';
import Slider from 'rc-slider';

let painLevel;

class Textbox extends Component {
    render() {
        return (
            <form>
                <input type="text" className="biggertextbox" id={this.props.id}/>
            </form>
        )
    }
};

class PainLevelQuestions extends Component {
    render() {
        if (painLevel < 4) {
            return (
                <div>
                    <Section text="1. Does the pain impair your ability to perform daily activities such as working, socializing etc.?" subtext={<YesNo name="painImpair" />} />
                    <Section text="2. Are you satisfied with your dosage?" subtext={<YesNo name="dosage" />} />
                    <Section text="3. Have you noticed any side effects? If you have, please describe them below." subtext={<Textbox id="side-effects" />} />
                    <Section text="4. Do the side effects impair your ability to perform daily activities such as working, socializing etc.?" subtext={<YesNo name="impair" />} />
                    <SubmitButton />
                </div> 
            );
        } else if (painLevel < 7) {
            return (
                <div>
                    <Section text="1: Can you cope with the pain?" subtext={<YesNo name="cope" />} />
                    <Section text="2: Does the pain impair your ability to sleep?" subtext={<YesNo name="sleep" />} /> 
                    <Section text="3. Have you noticed any side effects? If you have, please describe them." subtext={<Textbox id="side-effects" />} />
                    <Section text="3: Have you experienced any severe side effects (such as bleeding)?" subtext={<YesNo name="severe" />} />    
                    <SubmitButton />                                   
                </div>
            );
        } else if (painLevel >= 7) {
            return <Notification text="In case of severe acute pain, contact the emergency number or your doctor immediately." />;
        } else {
            return null;
        }
    }
};

class PainExplanation extends Component {
    render() {
        switch(this.props.level) {
            case 0: return <p>0: You have no pain at all.</p>
            case 1: return <p>1: Your pain is hardly noticable.</p>
            case 2: return <p>2: Your pain is mild and you are aware of your pain when you pay attention to it.</p>
            case 3: return <p>3: Your pain is tolerable and you don’t notice it most of the time.</p>
            case 4: return <p>4: Your pain is moderate and you are aware of it most of the time but you can continue most daily activities.</p>
            case 5: return <p>5: Your pain is strong and distracting and you are unable to perform some daily activities.</p>
            case 6: return <p>6: Your pain is intense and can cause you to think unclearly at times. You think about the pain all of the time and are unable to do many daily activities.</p>
            case 7: return <p>7: Your pain is unmanageable and keeps you from doing most of your daily activities.</p>
            case 8: return <p>8: Your pain is horrible and talking and listening are hard because of it.</p>
            case 9: return <p>9: Your pain is so severe that you cannot tolerate it and are unable to talk or move much.</p>
            case 10: return <p>10: You are unable to move and will go unconscious soon because of unimaginable pain.</p>
            default: return null;
        }
    }
};

class Notification extends Component {
    render() {
        return (
            <div className="danger">
                <p>{this.props.text}</p>
            </div>
        )
    }
};

class PainLevelSlider extends Component {
    handlePainLevel(value) {
        painLevel = value / 10;
        renderCheckup();
    }
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <Slider step={10} defaultValue={0} onChange={this.handlePainLevel} />
            </div>
        )
    }
};

const Questions = props => (
    <div>
        <div id="question1">
            <Section text="What is your current pain level?" subtext={<PainLevelSlider />} />
            <div className="painExp">
                <PainExplanation level={painLevel} />
            </div>
            <PainLevelQuestions />
        </div>
    </div>
);

class YesNo extends Component {
    render() {
        return (
            <form>
                <label className="radio-inline"><input type="radio" name={this.props.name} value="yes"/>Yes</label>
                <label className="radio-inline"><input type="radio" name={this.props.name} value="no"/>No</label>
            </form>
        )
    }
};

const SubmitButton = props => (
    <button className="btn-primary" onClick={renderThankYou}>Submit</button>
);

const root = document.getElementById('root');
const renderThankYou = () => ReactDOM.render(<ThankYouPage />, root);

export default class CheckupPage extends Component {
    getDate() {
        let today = new Date();
        return today.getDate().toString() + '.' + today.getMonth().toString() + '.' + today.getFullYear().toString();
    }
    render() {
        return (
            <div>
                <Header title="New checkup" subtitle={this.getDate()}/>
                <Questions />
                <BackToMain />
            </div>
        )
    }
};