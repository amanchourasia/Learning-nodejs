console.log("Hello World");

var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("Hello Server");
    response.end();
}).listen(3000);

console.log('Server started');