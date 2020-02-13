import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const PROFILE = gql`
    query {
        profile {
            name
        }
    }
`

const UPDATE_PROFILE = gql`
    mutation UpdateProfile($name: String){
        updateProfile(name: $name) {
            name
        }
    }
`

export function ProfilePage() {

    const { data, loading } = useQuery(PROFILE)

    const [ updateProfile ] = useMutation(UPDATE_PROFILE)


    const [user, setUser] = useState(null)

    useEffect(() => {
        if(!loading) setUser(data.profile)
    }, [data, loading])
    

    if(user === null) return <h1>Loading...</h1>
    
    return (
        <div className="ui form">
            <h1>User Profile</h1>
            <div className="field">
                <label>Username</label>
                <input
                    type="text"
                    value={user.name}
                    onChange={e => setUser({ ...user, name: e.target.value })}
                />
            </div>
            <button
                onClick={() => updateProfile({ variables: { name: user.name }}) }
                className="ui button"
            >
                Save
            </button>
        </div>
    )
}