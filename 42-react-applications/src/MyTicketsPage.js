import React, { Component } from 'react';
import { NavBar } from './NavBar';
import { TicketContainer } from './TicketContainer';

export class MyTicketsPage extends Component {
    render() {
        return (
            <div>
                <NavBar  selectPage={this.props.selectPage} />
                <h1>My Tickets</h1>
                <TicketContainer tickets={this.props.loggedInUser.tickets}/>
            </div>
        );
    }
}