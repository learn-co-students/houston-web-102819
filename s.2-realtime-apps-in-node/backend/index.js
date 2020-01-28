const io = require('socket.io')()


io.on('connection', socket => {
    
    socket.on('newDrawing', (image) => {
        io.emit('currentDrawing', image)
    })
    
})


io.listen(5000)