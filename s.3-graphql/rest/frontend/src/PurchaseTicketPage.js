import React, { useEffect, useState } from 'react';
import { TicketContainer } from './TicketContainer'

export function PurchaseTicketPage() {

    let [availableTickets, setAvailableTickets] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/tickets/available')
            .then(res => res.json())
            .then(tickets => setAvailableTickets(tickets))
    }, [])

    const selectTicket = (selectedTicket) => {
        setAvailableTickets(
            availableTickets.filter(ticket => selectedTicket != ticket)
        )
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

    return (
        <div>
            <h1>Purchase Tickets</h1>
            <TicketContainer
                selectTicket={selectTicket}
                tickets={availableTickets}
            />
        </div>
    );
}