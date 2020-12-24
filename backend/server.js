var express = require('express');
var cors = require('cors');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (client) => {
    console.log('a user connected')

    client.on('chat', (data) => {
        console.log('Message received -->', data)

        io.emit('chat', data)
    })

});


io.listen(5000, () => {
    console.log('Listening.....')
})

