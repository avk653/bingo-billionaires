var http = require("http");
var server = http.createServer(function (request, response) {
response.writeHead(200, { "Content-Type": "text/plain" });
response.end("Hello Web World!");
}).listen(8080); //the server object listens on port 8080