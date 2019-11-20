import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Register from './register';
import Login from './login';

export default function Welcome() {
    return (
        <div className="welcome-box">
            <div className="main-logo-welcome">
                <p id="smart-move">smart move</p>
            </div>
            <HashRouter>
                <div className="registration">
                    <Route exact path="/" component={Register} />
                    <Route path="/login" component={Login} />
                </div>
            </HashRouter>
        </div>
    );
}