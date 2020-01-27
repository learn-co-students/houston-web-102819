import React, { Component } from 'react';
import { NavBar } from './NavBar';

export class TicketPage extends Component {

    state = {
        ticket: null
    }

    componentDidMount(){
        const ticketId = this.props.match.params.id
        fetch(`http://localhost:3000/tickets/${ticketId}`)
            .then( res => res.json())
            .then( ticket => this.setState({
                ticket: ticket
            }) )
    }

    render() {
        if(this.state.ticket == null){
            return <h1>Loading...</h1>
        } else {
            return (
                <div>
                    <NavBar  selectPage={this.props.selectPage} />
                    <h1>{this.state.ticket.destination}</h1>
                    <h3>{this.state.ticket.airline.name}</h3>
                </div>
            );
        }
    }
}