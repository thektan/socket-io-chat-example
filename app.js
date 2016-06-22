// Express initializes app to be a function handler that you can supply to an HTTP server.
var app = require('express')();
var http = require('http').Server(app);

// Initilize new instance by passing the http object.
var io = require('socket.io')(http);

// We define a route handler '/' that gets called when we hit our website home.
app.get(
	'/',
	function(request, response) {
		response.sendFile(__dirname + '/index.html');
	}
);

// Listen to the 'connection' event for incoming sockets and log into console.
io.on(
	'connection',
	function(socket) {
		console.log('a user connected');

		socket.on(
			'disconnect',
			function() {
				console.log('user disconnected');
			}
		);
	}
);

// We make the http server listen on port 3000.
http.listen(
	3000,
	function() {
		console.log('listening on *:3000');
	}
);