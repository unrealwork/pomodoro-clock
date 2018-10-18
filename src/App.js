import React, {Component} from 'react';
import './App.css';

const Header = () => (
    <div className="content has-text-centered">
        <h1 className="heading is-2">Pomodoro Clock</h1>
        <img alt={"Pomodoro logo"} src={"./favicon.png"}/>

    </div>
);

const BreakControl = () => (
    <div className="column has-text-centered">
        <p id="break-label" className="title is-5">Break Length</p>
        <div className={"column"}>
            <div className="content">
                <h1 className="heading is-1">0</h1>
            </div>
            <button className="button has-text-weight-bold is-light">-</button>
            <button className="button has-text-weight-bold is-light">+</button>
        </div>
    </div>
);

const SessionControl = () => (
    <div className="column has-text-centered">
        <p id="session-label" className="title is-5">Session Length</p>
        <div className={"column"}>
            <div className="content">
                <h1 className="heading is-1">0</h1>
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


const ControlPanel = () => (
    <div className="columns is-centered">
        <BreakControl/>
        <SessionControl/>
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
                            <ControlPanel/>
                            <TimerPanel/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
