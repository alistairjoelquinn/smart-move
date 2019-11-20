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
        console.log(target.value);

    }
    submit() {
        console.log(this.state.first, this.state.last);
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
                {this.state.error && (
                    <div className="error">Oops! You made a mistake.</div>
                )}
                <Link id="already-member" to="/login">Log In</Link>
                <input className="placeholder-shine" name="first" type="text" placeholder="First Name..." onChange={e => {
                    this.handleChange(e);
                }} required />
                <input className="placeholder-shine" name="last" type="text" placeholder="Last Name..." onChange={e => {
                    this.handleChange(e);
                }} required />
                <input className="placeholder-shine" name="email" type="email" placeholder="Email Address..."onChange={e => {
                    this.handleChange(e);
                }} required />
                <input className="placeholder-shine" name="password" type="password" placeholder="Password" onChange={e => {
                    this.handleChange(e);
                }} required />
                <a className="submit-button" onClick={() => this.submit()}>Submit</a>
            </div>
        );
    }
}