var port = process.env.port || 81;

var app = require('http').createServer(function(req, res) {
	fs.readFile('index.html', 'utf8', function (errors, contents) {
		res.writeHead(200);
		response.end(contents); 
	});
});

app.listen(port);