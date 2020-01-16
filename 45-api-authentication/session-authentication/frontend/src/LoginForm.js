import React, { Component } from 'react';
export class LoginForm extends Component {

    state = {
        nameInputValue: '',
        passwordInputValue: '',
        errorMessage: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.nameInputValue,
                password: this.state.passwordInputValue
            })
        })
            .then(res => res.json())
            .then(login => {
                if(login.failed){
                    this.setState({ errorMessage: login.message })
                } else {
                    this.props.setLoggedInUser(login.user)
                }
            })
    }

    render() {
        return (
            <form>
                <label>Username</label>
                <input
                    onChange={e => this.setState({ nameInputValue: e.target.value })}
                    value={this.state.nameInputValue}
                    type="text" />
                <label>Password</label>     
                <input
                    onChange={e => this.setState({ passwordInputValue: e.target.value })}
                    value={this.state.passwordInputValue}
                    type="text" />
                <p>{this.state.errorMessage}</p>
                <button onClick={this.handleSubmit}>
                    Login
                </button>
            </form>
        );
    }
}