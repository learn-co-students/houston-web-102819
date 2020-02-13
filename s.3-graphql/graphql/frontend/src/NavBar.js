import React from 'react';
import { Link } from 'react-router-dom'

export function NavBar(){

    return (
        <div className="ui menu">
            <Link
                to="/profile"
                className="item">
                Profile Page
                </Link>
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