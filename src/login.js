import React, { Component } from 'react';
import axios from './axios';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }
    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }
    submit() {
        axios.post('/login', {
            email: this.state.email,
            password: this.state.password
        }).then(
            () => {
                location.replace('/');
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    error: true,
                });
            });
    }
    render() {
        return (
            <div className="login-fields">
                <a id="back-button" href="/">Back</a>
                {this.state.error && (
                    <div className="error">Oops! You made a mistake.</div>
                )}
                <input name="email" type="email" placeholder="Email Address..."onChange={e => {
                    this.handleChange(e);
                }} required />
                <input name="password" type="password" placeholder="Password" onChange={e => {
                    this.handleChange(e);
                }} required />
                <button id="login-inner" onClick={() => this.submit()}>Login</button>
            </div>
        );
    }
}
