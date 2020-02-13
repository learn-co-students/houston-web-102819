import React, { useState, useEffect } from 'react';

export function TicketPage(props) {

    const [ticket, setTicket] = useState(null)

    useEffect(() => {
        const ticketId = props.match.params.id
        fetch(`http://localhost:3000/tickets/${ticketId}`)
            .then(res => res.json())
            .then(ticket => setTicket(ticket))
    }, [])

    if (ticket == null) {
        return <h1>Loading...</h1>
    } else {
        return (
            <div>
                <h1>{ticket.destination}</h1>
                <h3>{ticket.airline_name}</h3>
            </div>
        );
    }
}