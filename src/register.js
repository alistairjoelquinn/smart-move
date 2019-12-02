import React from 'react';
import axios from './axios';
import { Link } from 'react-router-dom';

export default class Register extends React.Component {
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
        axios.post('/register', {
            first: this.state.first,
            last: this.state.last,
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
            <div className="input-fields">
                <div id="reg-text">Register to create an account.</div>
                {this.state.error && (
                    <div className="reg-error">Oops! You made a mistake.</div>
                )}
                <Link id="login-button" to="/login">Log In</Link>
                <input className="reg-input" name="first" type="text" placeholder="First Name..." onChange={e => {
                    this.handleChange(e);
                }} required />
                <input className="reg-input" name="last" type="text" placeholder="Last Name..." onChange={e => {
                    this.handleChange(e);
                }} required />
                <input className="reg-input" name="email" type="email" placeholder="Email Address..."onChange={e => {
                    this.handleChange(e);
                }} required />
                <input className="reg-input" name="password" type="password" placeholder="Password" onChange={e => {
                    this.handleChange(e);
                }} required />
                <a className="submit-button" onClick={() => this.submit()}>Submit</a>
            </div>
        );
    }
}