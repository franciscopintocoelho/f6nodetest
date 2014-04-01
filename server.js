// note, io.listen(<port>) will create a http server for you
var io = require('socket.io').listen(80);

io.sockets.on('connection', function (socket) {
  	socket.on('speak', function (data) {
    	io.sockets.emit('speak', data);
  	});
  	
  	socket.on('disconnect', function () {
    	io.sockets.emit('user disconnected');
  	});
});