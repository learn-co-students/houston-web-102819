import React, { Component } from 'react';
export class LoginForm extends Component {

    state = {
        nameInputValue: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.nameInputValue
            })
        })
            .then( res => res.json())
            .then( user => {
                this.props.setLoggedInUser(user)
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
                <button onClick={this.handleSubmit}>
                    Login
                </button>
            </form>
        );
    }
}