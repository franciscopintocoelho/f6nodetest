var port = 81;

var app = require('http').createServer(handler),
	io = require('socket.io').listen(app)

app.listen(port);
console.log('socket.io server started on port: ' + port + '\n');

function handler (req, res) {
	res.writeHead(200);
	res.end('socket.io server started on port: ' + port + '\n');
}

io.sockets.on('connection', function (socket) {
	socket.on('speak', function (data) {
		io.sockets.emit('speak', data);
	});

	socket.on('disconnect', function () {
		io.sockets.emit('user disconnected');
	});
});