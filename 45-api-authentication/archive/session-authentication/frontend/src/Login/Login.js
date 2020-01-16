import React, { useState } from 'react'
  
export function Login(props){

    const [ user, changeUser ] = useState({
        name: '',
        password: ''
    })

    async function handleSubmit(e){
        e.preventDefault()
        let response = await fetch('http://localhost:3000/login', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'X-Requested-With': 'XmlHttpRequest',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user.name,
                password: user.password
            })
        })
        let { success, id } = await response.json()
        if(success){
            props.history.push(`/passengers/${id}`)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div>
                <label>Username</label>
                <input type="text" value={user.name} onChange={ e => changeUser({ ...user, name: e.target.value })} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={user.password} onChange={ e => changeUser({ ...user, password: e.target.value })} />
            </div>
            <input type="submit" />
        </form>
    )
}  