//"natural" modules
const Inert = require('inert');
const Hapi = require('hapi');

//custom modules
const routes = require('./server/routes/main.js');


//initialization
const server = new Hapi.Server();

server.connection({ port: 7776 });

server.register(Inert, (err) => {

    if (err) { throw err; }
    server.route(routes);

});

//start
server.start((err) => {
    if (err) { throw err; }
    console.log(`Server running at: ${server.info.uri}`);
});
