module.exports = function(server) {
	server.route([

		{
		    method: 'GET',
		    path: '/',
		    handler: function (request, reply) {
		        reply.view('index');
		    }
		},
		{
		    method: 'GET',
		    path: '/{param*}',
		    handler: {
		        directory: {
		            path: 'public',
		            listing: true
		        }
		    }
		}
	]);
};