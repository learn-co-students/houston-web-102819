import React, { Component } from 'react';
import { TicketCard } from './TicketCard';
export class TicketContainer extends Component {
    render() {
        return (
            <div className="ui cards">
               {this.props.tickets.map( ticket => (
                   <TicketCard ticket={ticket} onClick={this.props.selectTicket}/>
               ))}
            </div>
        );
    }
}