import React, { useEffect, useState } from 'react'
import DrawArea from './components/DrawArea'
import socketIO from 'socket.io-client'


const socket = socketIO('http://10.185.5.81:5000')

function App() {

  const [image, setImage] = useState('')

  let handleChange = (image) => {
    socket.emit('newDrawing', image)
    setImage(image)
  }

  useEffect( () => {
    socket.on('currentDrawing', image => {
      setImage(image)
    })
  }, [])


  return (
    <DrawArea
      image={image}
      onChange={handleChange}
    />
  )
}

export default App