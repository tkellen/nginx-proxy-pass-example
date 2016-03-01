const port = process.env.PORT || '8000';
const host = process.env.HOST || '0.0.0.0';

const http = require('http');

function handler (request, response) {
  response.end(JSON.stringify(request.headers,null,2));
}

http.createServer(handler).listen(port, function(){
  console.log('Server running on %s:%d', host, port);
});
