import React, { useState, useEffect } from 'react';

function App(props) {
  let [ state, setState ] = useState({ 
    message: ''
  })

  useEffect(() => {
    fetch(`http://localhost:3001/message`)
        .then( res => res.json())
        .then( message => {
          setState({
            message: message.content
          })
        })
  }, [])

  const { message } = state

  return (
    <div>
      <h1>{message}</h1>

      <div>
        <label>Message</label>
        <input
          value={message}
          onChange={e => {
            setState(e.target.value)
          }  }
          type="text"
        />
      </div>
    </div>
  )
}


export default App;
