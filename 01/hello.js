var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Sup! Y\'all');
})
.listen(8000);

console.log('Server running on pot 8000');
