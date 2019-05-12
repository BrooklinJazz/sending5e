const express = require('express')
const app = express()
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 4000

app.get('/', (req, res) => res.send('Hello World!'))

io.on('connection', function (socket) {
    socket.emit('player message', { message: 'an example private message' });
    socket.on('dm message', function (data) {
      console.log("dm sent message!!!: ", data.message);
    });
  });

server.listen(port, () => console.log(`Listening on port ${port}`))