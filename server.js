var port = process.env.port || 8080;

var app = require('http').createServer(handler),
	io = require('socket.io').listen(app)

app.listen(port);
console.log('socket.io server started on port: ' + port + '\n');

function handler (req, res) {
	res.writeHead(200);
	res.end('socket.io server started on port: ' + port + '\n');
}

io.sockets.on('connection', function (socket) {
	console.log('connected');
	
	socket.on('f6beacons', function (data) {
		io.sockets.emit('location', data);
	});

	socket.on('disconnect', function () {
		console.log('disconnected');
		io.sockets.emit('user disconnected');
	});
});