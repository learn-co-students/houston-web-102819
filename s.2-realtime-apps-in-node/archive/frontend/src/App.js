import React, { useEffect, useState } from 'react'
import DrawArea from './components/DrawArea'
import socketIO from 'socket.io-client'

const io = socketIO('localhost:5000/')

function App() {

  const [image, setImage] = useState('')

  useEffect(() => {
    io.on('imageChanged', image => setImage(image))
  }, [])

  let handleChange = (image) => {
    setImage(image)
    io.emit('changeImage', image)
  }
  return (
    <DrawArea
      image={image}
      onChange={handleChange}
    />
  )
}

export default App