var http = require('http');
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World' + process.env.port + '\n');
}).listen(port);

var io = require('socket.io').listen(process.env.port);

io.sockets.on('connection', function (socket) {
  	socket.on('speak', function (data) {
    	io.sockets.emit('speak', data);
  	});
  	
  	socket.on('disconnect', function () {
    	io.sockets.emit('user disconnected');
  	});
});