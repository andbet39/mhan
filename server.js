// server.js

var Hapi        = require('hapi');
var mongoose    = require('mongoose');
var Path 		= require('path');

    
// config files
var db = require('./config/db');

// set our port
var port = 3000; 

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.views({
    engines: {
        html: require('handlebars')
    },
    path: Path.join(__dirname, 'public')
});


server.start(function () {
    console.log('Server running at:', server.info.uri);
});

//load basic route for server
require('./server/routes/basic')(server); 

 

