import React, { Component } from 'react'

import { LoginPage } from './LoginPage'
import { MyTicketsPage } from './MyTicketsPage'
import { PurchaseTicketPage } from './PurchaseTicketPage'

export class App extends Component {

    state = {
        selectedPage: 'login',
        loggedInUser: null
    }

    componentDidMount(){
        fetch('http://localhost:3000/profile', {
            credentials: 'include'
        })
            .then( res => res.json())
            .then( profile => {
                if(!profile.error){
                    this.setState({
                        loggedInUser: profile,
                        selectedPage: 'myTickets'
                    }) 
                }
            })

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