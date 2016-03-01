const port = process.env.PORT || '8000';
const host = process.env.HOST || '0.0.0.0';

const http = require('http');

function handler (request, response) {
  res.send(request.headers);
}

http.createServer(handler).listen(port, function(){
  console.log('Server running on %s:%d', host, port);
});
