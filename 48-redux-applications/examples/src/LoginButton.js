import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = {
    login: () =>  ({ type: 'LOGIN_USER', name: 'Feven' })
}

export const LoginButton = connect( mapStateToProps, mapDispatchToProps )((props) => {
    return (
        <button onClick={props.login}>Login</button>
    )
})