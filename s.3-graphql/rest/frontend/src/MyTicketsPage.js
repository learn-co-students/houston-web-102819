import React, { useEffect, useState } from 'react';
import { TicketContainer } from './TicketContainer';

export function MyTicketsPage() {

    const [tickets, setTickets] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/profile`)
            .then(res => res.json())
            .then(user => setTickets(user.tickets))
    }, [])

    return (
        <div>
            <h1>My Tickets</h1>
            <TicketContainer tickets={tickets} />
        </div>
    );

}