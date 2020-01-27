import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class TicketCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="content">
                    <div className="header">{this.props.ticket.destination}</div>
                    <div className="description">{this.props.ticket.airline.name} ({this.props.ticket.seat_number}-{this.props.ticket.price})</div>
                    <Link className="ui button" to={`/tickets/${this.props.ticket.id}`} >View Details</Link>
                    <button className="ui button" onClick={() => this.props.onClick(this.props.ticket)}>Purchase</button>
                </div>
            </div>
        );
    }
}