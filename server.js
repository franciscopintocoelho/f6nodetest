var port = process.env.port || 1337;
var io = require('socket.io').listen(port);

io.sockets.on('connection', function (socket) {
  	socket.on('speak', function (data) {
    	io.sockets.emit('speak', data);
  	});
  	
  	socket.on('disconnect', function () {
    	io.sockets.emit('user disconnected');
  	});
});