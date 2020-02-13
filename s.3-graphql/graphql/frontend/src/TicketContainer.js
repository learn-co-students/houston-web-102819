import React, { Component } from 'react';
import { TicketCard } from './TicketCard';

export function TicketContainer(props) {
    return (
        <div className="ui cards">
            {props.tickets.map(ticket => (
                <TicketCard
                    ticket={ticket}
                    onClick={props.selectTicket}
                    selectPage={props.selectPage}
                />
            ))}
        </div>
    );

}