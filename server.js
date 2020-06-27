const io = require('socket.io')(3000) //create a server by passing port number 

//everytime a user logs on this function is called
io.on('connection', socket => {
    //'event-name', followed by 'message'
    socket.emit('chat-message', 'Hello World')
})