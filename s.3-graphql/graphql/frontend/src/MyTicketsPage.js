import React, { useEffect, useState } from 'react';
import { TicketContainer } from './TicketContainer';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const PROFILE_TICKETS = gql`
    query {
        profile {
            tickets {
                destination,
                seat_number,
                price,
                airline {
                    name
                }
            }
        }
    }
`

export function MyTicketsPage() {

    const { loading, data } = useQuery(PROFILE_TICKETS)

    if(loading) return <h1>Loading...</h1>

    const tickets = data.profile.tickets

    return (
        <div>
            <h1>My Tickets</h1>
            <TicketContainer tickets={tickets} />
        </div>
    );

}