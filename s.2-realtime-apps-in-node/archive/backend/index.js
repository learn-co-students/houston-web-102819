const io = require('socket.io')();


const picture = '';


io.on('connection', (socket) => {

    socket.on('changeImage', url => {
        socket.broadcast.emit('imageChanged', url)
    })

})


io.listen(5000)