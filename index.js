const path = require('path');
const express = require('express');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Cross origin fix
io.origins(["http://localhost:*"])

// app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  //res.sendFile(path.join(__dirname, 'build', 'index.html'));
  res.end()
});

io.on('connection', function (socket) {
  socket.emit('event', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

server.listen(8080);
