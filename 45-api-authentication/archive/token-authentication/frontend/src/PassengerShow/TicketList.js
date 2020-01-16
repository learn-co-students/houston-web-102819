import React from 'react';

export class TicketList extends React.Component {
    render() {
        return (
            <div>
                <h1>TicketList</h1>
                <ul>
                    {this.props.tickets.map( ticket => (
                        <li>{ticket.id}</li>
                    ))}
                </ul>
            </div>
        );
    }
}