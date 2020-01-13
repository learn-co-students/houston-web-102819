import React, { Component } from 'react'

import { LoginPage } from './LoginPage'
import { MyTicketsPage } from './MyTicketsPage'
import { PurchaseTicketPage } from './PurchaseTicketPage'


// Using componentDidMount to get data from a server
// Rendering jsx based on stateful data
// Listen for events
// Change State
// Change State in a parent component


// Changing State in a Parent Component (Inverse Dataflow)
// Step 1: Define a function in the parent
// Step 2: Pass it to a child component
// Step 3: Invoke it in the child
// Step 4: Pass any data needed from the child
// Step 5: Change State according to the logic of your app

export class App extends Component {

    state = {
        selectedPage: 'login',
        loggedInUser: null
    }

    selectPage = page => {
        this.setState({
            selectedPage: page
        })
    }

    setLoggedInUser = (user) => {
        this.setState({
            loggedInUser: user,
            selectedPage: 'myTickets'
        })
    } 

    purchaseTicket = (ticket) => {

        // Mutating State:
        // this.state.loggedInUser.tickets.push( ticket )

        // Declaratively State
        this.setState({
            loggedInUser: {
                ...this.state.loggedInUser,
                tickets: [
                    ...this.state.loggedInUser.tickets,
                    ticket
                ]
            }
        })

        fetch(`http://localhost:3000/tickets/${ticket.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: this.state.loggedInUser.id,
            })
        })
    }

    render(){
        window.app = this
        if(this.state.selectedPage === 'login'){
            return (
                <div className="ui container">
                    <LoginPage setLoggedInUser={this.setLoggedInUser} />
                </div>
            )
        }
        if(this.state.selectedPage === 'myTickets'){
            return (
                <div className="ui container">
                    <MyTicketsPage 
                        loggedInUser={this.state.loggedInUser} 
                        selectPage={this.selectPage}
                    />
                </div>
            )
        }
        if(this.state.selectedPage === 'purchaseTickets'){
            return (
                <div className="ui container">
                    <PurchaseTicketPage 
                        purchaseTicket={this.purchaseTicket}
                         selectPage={this.selectPage}
                    />
                </div>
            )
        }
    }

}