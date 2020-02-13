import React from 'react';
import { Link } from 'react-router-dom';

export function TicketCard(props) {
    return (
        <div className="card">
            <div className="content">
                <div className="header">{props.ticket.destination}</div>
                <div className="description">{props.ticket.airline.name} ({props.ticket.seat_number}-{props.ticket.price})</div>
                <Link className="ui button" to={`/tickets/${props.ticket.id}`} >View Details</Link>
                <button className="ui button" onClick={() => props.onClick(props.ticket)}>Purchase</button>
            </div>
        </div>
    );
}