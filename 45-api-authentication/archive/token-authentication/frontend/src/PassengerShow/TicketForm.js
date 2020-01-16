import React from 'react';

export class TicketForm extends React.Component {

    render() {
        return (
            <div>
                <h1>TicketForm</h1>
                <form onSubmit={this.props.createTicket}>
                    {this.props.airlines.map(airline => (
                        <div>
                            <label>
                                <input value={airline.id} name="airline" type="radio" /> {airline.name}
                            </label>
                        </div>
                    ))}
                    <input type="submit" />
                </form>
            </div>
        );
    }
}