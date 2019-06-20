const express = require('express');
const app = express();

server = app.listen(3001, function() {
    console.log('server is listening for changes\n',
    'on TEH p00rt: 3001');
});

const io = require('socket.io')(server);

io.on('connection', function(socket) {
    console.log(socket.id);
    socket.on('SEND_MESSAGE', function(data) {
        io.emit('MESSAGE', data);
    });   
});


