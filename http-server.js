var http = require('http');
var port = 8180;

function handleGetRequest(response) {
  response.writeHead(200, {'Content-Type' : 'text/plain'});
  response.end('GET action was requested');
}

function handlePostRequest(response) {
  response.writeHead(200, {'Content-Type' : 'text/plain'});
  response.end('POST action was requested');
}

function handlePutRequest(response) {
  response.writeHead(200, {'Content-Type' : 'text/plain'});
  response.end('PUT action was requested');
}

function handleDeleteRequest(response) {
  response.writeHead(200, {'Content-Type' : 'text/plain'});
  response.end('DELETE action was requested');
}

function handleBadRequest(response) {
  console.log('Unsupported http mehtod');
  response.writeHead(400, {'Content-Type' : 'text/plain'  });
  response.end('Bad request');
}

function handleRequest(request, response) {
  switch (request.method) {
    case 'GET': handleGetRequest(response); break;   
    case 'POST': handlePostRequest(response); break;
    case 'PUT': handlePutRequest(response); break;
    case 'DELETE': handleDeleteRequest(response); break;
    default: handleBadRequest(response); break;
  }
  console.log('Request processing completed');
}

http.createServer(handleRequest).listen(port, '127.0.0.1', () => {
    console.log(`Started Node.js http server at http://127.0.0.1:${port}`);
});