// Express initializes app to be a function handler that you can supply to an HTTP server.
var app = require('express')();
var http = require('http').Server(app);

// We define a route handler '/' that gets called when we hit our website home.
app.get(
	'/',
	function(request, response) {
		response.sendFile(__dirname + '/index.html');
	}
);

// We make the http server listen on port 3000.
http.listen(
	3000,
	function() {
		console.log('listening on *:3000');
	}
);