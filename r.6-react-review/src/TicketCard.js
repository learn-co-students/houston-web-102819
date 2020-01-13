import React, { Component } from 'react';
export class TicketCard extends Component {
    render() {
        return (
            <div className="card" onClick={() => this.props.onClick(this.props.ticket)}>
                <div className="content">
                    <div className="header">{this.props.ticket.destination}</div>
                    <div className="description">{this.props.ticket.airline.name} ({this.props.ticket.seat_number}-{this.props.ticket.price})</div>
                </div>
            </div>
        );
    }
}