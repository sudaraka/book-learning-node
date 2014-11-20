var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('server.js', 'utf8', function(err, data) {
        res.writeHead(200, {'content-type': 'text/plain'});

        if(err) {
            res.write('Could not find or open file for reading\n');
        }
        else {
            res.write(data);
        }

        res.end();
    });
})
.listen(8000, function() {
    console.log('Server running on pot 8000');
});
