import React, {Component} from 'react';
import './App.css';

const Header = () => (
    <div className="content has-text-centered">
        <h1 className="heading is-2">Pomodoro Clock</h1>
        <img src={"./favicon.png"}/>
    </div>
);

const BreakControl = () => (
    <div className="column has-text-centered">
        <p id="break-label" className="title is-5">Break Length</p>
    </div>
);

const SessionControl = () => (
    <div className="column has-text-centered">
        <p id="session-label" className="title is-5">Session Length</p>
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
                            <div className="columns is-centered">
                                <BreakControl/>
                                <SessionControl/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
