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

