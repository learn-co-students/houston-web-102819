import React, { Component } from 'react';
import { NavBar } from './NavBar';
import { TicketContainer } from './TicketContainer';

export class MyTicketsPage extends Component {

    state = {
        tickets: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/users/${3}`)
            .then( res => res.json())
            .then( user => this.setState({ tickets: user.tickets }))
    }

    render() {
        return (
            <div>
                <NavBar  selectPage={this.props.selectPage} />
                <h1>My Tickets</h1>
                <TicketContainer tickets={this.state.tickets}/>
            </div>
        );
    }
}