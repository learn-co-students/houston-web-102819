import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import { MyTicketsPage } from './MyTicketsPage'
import { PurchaseTicketPage } from './PurchaseTicketPage'
import { TicketPage } from './TicketPage'
import { ProfilePage } from './ProfilePage'
import { NavBar } from './NavBar'

export function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="ui container">
                <Route exact path="/profile" component={ProfilePage} />
                <Route exact path="/my-tickets" component={MyTicketsPage} />
                <Route exact path="/tickets" component={PurchaseTicketPage} />
                <Route exact path="/tickets/:id" component={TicketPage} />
                <Route path="/" component={() => <Redirect to="/profile" />} />
            </div>
        </BrowserRouter>
    )
}