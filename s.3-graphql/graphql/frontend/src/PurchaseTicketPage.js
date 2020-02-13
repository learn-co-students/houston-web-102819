import React, { useEffect, useState } from 'react';
import { TicketContainer } from './TicketContainer'
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
// import { PROFILE_TICKETS } from './MyTicketsPage';


const AVAILABLE_TICKETS = gql`
    query {
        availableTickets {
            id,
            destination,
            seat_number,
            price,
            airline {
                name
            }
        }
    }
`

const PURCHASE_TICKET = gql`
  mutation PurchaseTicket($id: Int, $user_id: Int){
    purchaseTicket(id: $id, user_id: $user_id) {
        user {
            name
        }
    }
  }
`;

export function PurchaseTicketPage() {

    let [availableTickets, setAvailableTickets] = useState([])
    let { loading, data } = useQuery(AVAILABLE_TICKETS)
    let [ purchaseTicket ] = useMutation(PURCHASE_TICKET)

    useEffect(() => {
        if(!loading) setAvailableTickets(data.availableTickets) 
    }, [ loading, data ])

    const selectTicket = (selectedTicket) => {
        setAvailableTickets(
            availableTickets.filter(ticket => selectedTicket != ticket)
        )

        purchaseTicket({ 
            variables: { id: selectedTicket.id, user_id: 1  },
            // refetchQueries: [ { query: PROFILE_TICKETS } ],      
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