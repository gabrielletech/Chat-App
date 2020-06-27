const io = require('socket.io')(3000) //create a server by passing port number 

const users = {}

//everytime a user logs on this function is called
io.on('connection', socket => {
    //'event-name', followed by 'message'
    //emit sends info from the client to the server
    socket.on('new-user', name => {
        users[socket.id] = name
        socket.broadcast.emit('user-connected', name)
    })
    socket.on('send-chat-message', message => {
        //sends message to whoever is connected to the server
       socket.broadcast.emit('chat-message', message)
    })
})