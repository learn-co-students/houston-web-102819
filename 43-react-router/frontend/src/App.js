import React, { Component } from 'react'

import { MyTicketsPage } from './MyTicketsPage'
import { PurchaseTicketPage } from './PurchaseTicketPage'
import { TicketPage } from './TicketPage'

import { BrowserRouter, Route } from 'react-router-dom'


export class App extends Component {

    state = {
        selectedPage: 'purchaseTickets',
    }

    selectPage = page => {
        this.setState({
            selectedPage: page
        })
    }

    render() {
        return (
            <BrowserRouter>
                {/* <Route path="/admin" component={AdminRouter} /> */}
                <Route exact path="/my-tickets" component={MyTicketsPage} />
                <Route exact path="/tickets" component={PurchaseTicketPage} />
                <Route exact path="/tickets/:id" component={TicketPage} />
            </BrowserRouter>
        )
    }
}

// function AdminRouter(){
//     return (
//         <div>
//             <Route path="/admin/users" component={UserManager} />
//         </div>
//     )
// }