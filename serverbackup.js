var hapi = require('hapi');
var path = require('path');
var port = 3000;


var serverLibraries = [
	// add more libraries here
	require('inert')
];

var server = new hapi.Server({
	connections: {
		routes: {
			files: {
				relativeTo: path.join(__dirname, 'public')
			}
		}
	}
});

server.connection({port: port});

server.register(serverLibraries, function(err) {
	if (err) throw err;
});

var defaultRoute = {
	auth: false,
	handler: function(request, reply) {
		!request.params.params ? reply.file('index.html') : reply.file(request.params.params);
	}
}

var routes = [
	{method: 'GET', path: '/{params*}', config: defaultRoute}
];

server.route(routes);

server.start(function(err) {
	if (err) return console.log(err);
	console.log('server running at: ' + server.info.uri);
});
