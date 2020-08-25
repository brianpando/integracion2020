var http = require("http");
var port = 8180;

http.createServer( function (request, response){
	response.writeHead(200,{ 'Content-Type':'text/plain' });
	response.end("Hello from Node.JS Integraciones--------****");
	//console.log("Hello handler requested");
}).listen(port,'127.0.0.1',()=>{
	console.log("Started NodeJs http server at 127.0.0.1:8180");
});


