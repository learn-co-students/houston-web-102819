import React from 'react'
import { LoginForm } from './LoginForm'

export function LoginPage(props){
    return (
        <div>
            <h1>Login</h1>
            <LoginForm setLoggedInUser={props.setLoggedInUser}/>
        </div>
    )
}