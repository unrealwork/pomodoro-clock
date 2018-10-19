import React, {Component} from 'react';
import './App.css';
import {decrease, increase} from "./actions/adjusters";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const Header = () => (
    <div className="content has-text-centered">
        <h1 className="heading is-2">Pomodoro Clock</h1>
        <img alt={"Pomodoro logo"} src={"./favicon.png"}/>

    </div>
);

const BreakControl = (props) => (
    <div className="column has-text-centered">
        <p id="break-label" className="title is-5">Break Length</p>
        <div className={"column"}>
            <div className="content">
                <h1 className="heading is-1">{props.length}</h1>
            </div>
            <button className="button has-text-weight-bold is-light" onClick={props.onMinusButton}>-</button>
            <button className="button has-text-weight-bold is-light" onClick={props.onPlusButton}>+</button>
        </div>
    </div>
);

const SessionControl = (props) => (
    <div className="column has-text-centered">
        <p id="session-label" className="title is-5">Session Length</p>
        <div className={"column"}>
            <div className="content">
                <h1 className="heading is-1">{props.length}</h1>
            </div>
            <button className="button is-light">-</button>
            <button className="button is-light">+</button>
        </div>
    </div>
);


const BoxedNumber = (props) => (
    <div className="column is-4">
        <div className="box has-text-centered">
            <div className="content">
                <h1 className="heading">{props.number}</h1>
            </div>
        </div>
    </div>
);


const ControlPanel = (props) => (
    <div className="columns is-centered">
        <BreakControl length={props.breakLength} onPlusButton={props.onBreakIncrease} onMinusButton={props.onBreakDecrease}/>
        <SessionControl length={props.sessionLength}/>
    </div>
);

const TimerPanel = () => (
    <div className="columns is-centered ">
        <BoxedNumber number="00:00"/>
    </div>
);

class App extends Component {

    render() {
        return (
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-7">
                        <div className="card">
                            <Header/>
                            <ControlPanel breakLength={this.props.breakLength}
                                          sessionLength={this.props.sessionLength}
                                          onBreakIncrease={this.props.incBreak}
                                          onBreakDecrease={this.props.desBreak}
                            />
                            <TimerPanel/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        breakLength: state.adjuster.breakLength,
        sessionLength: state.adjuster.sessionLength
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
            incBreak: increase('breakLength'),
            desBreak: decrease('breakLength')
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
