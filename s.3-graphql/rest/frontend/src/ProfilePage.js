import React, { useState, useEffect } from 'react'

export function ProfilePage() {

    const [ user, setUser ] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/profile')
            .then( res => res.json())
            .then( user => setUser(user))
    }, [])

    const saveProfile = () => {
        fetch('http://localhost:3000/profile', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then( res => res.json())
            .then( user => setUser(user))
    }

    if(user === null) return <h1>Loading...</h1>

    return (
        <div className="ui form">
            <h1>User Profile</h1>
            <div className="field">
                <label>Username</label>
                <input 
                    type="text"
                    value={user.name} 
                    onChange={ e => setUser({ ...user, name: e.target.value })} 
                />
            </div>
            <button 
                onClick={saveProfile}
                className="ui button"
            >
                Save
            </button>
        </div>
    )
}