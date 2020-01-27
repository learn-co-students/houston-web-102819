import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div className="ui menu">
                <Link 
                    to="/my-tickets"
                    className="item">
                    My Tickets
                </Link>
                <Link 
                    to="/tickets"
                    className="item">
                    Purchase Tickets
                </Link>
            </div>
        );
    }
}