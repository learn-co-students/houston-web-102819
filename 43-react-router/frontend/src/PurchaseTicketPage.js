import React, { Component } from 'react';
import { NavBar } from './NavBar'
import { TicketContainer } from './TicketContainer'

export class PurchaseTicketPage extends Component {

    state = {
        availableTickets: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/tickets')
        .then(res => res.json())
        .then(tickets => {
            this.setState({
                availableTickets: tickets
            })
        })
    }

    selectTicket = (selectedTicket) => {
        this.setState({
            availableTickets: this.state.availableTickets.filter( ticket => selectedTicket != ticket)
        })
       fetch(`http://localhost:3000/tickets/${selectedTicket.id}`, {
           method: 'PATCH',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({
               user_id: 3
           })
       })
    }

    render() {
        return (
            <div>
                <NavBar selectPage={this.props.selectPage}/>
                <h1>Purchase Tickets</h1>
                <TicketContainer 
                    selectTicket={this.selectTicket}
                    tickets={this.state.availableTickets} 
                    selectPage={this.props.selectPage}
                />
            </div>
        );
    }
}