import React, { Component } from 'react';
export class NavBar extends Component {
    render() {
        return (
            <div className="ui menu">
                <button 
                    onClick={() =>  this.props.selectPage('myTickets')}
                    className="item">
                    My Tickets
                </button>
                <button 
                    onClick={() =>  this.props.selectPage('purchaseTickets')}
                    className="item">
                    Purchase Tickets
                </button>
            </div>
        );
    }
}