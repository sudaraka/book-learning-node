#!/usr/bin/env node

var http = require('http'),
    fs = require('fs'),
    mime = require('mime'),
    base = './www';

const PORT = 5000;

http.createServer(function(req, res) {
    var pathname = base + req.url,
        file, type;

    fs.stat(pathname, function(err, stats) {
        if(err) {
            res.writeHead(404);
            res.write('404 Not Found\n');
            res.end();

            console.log('404: ' + pathname);
        }
        else if(stats.isFile()) {
            type = mime.lookup(pathname);
            console.log(type);

            res.setHeader('Content-Type', type);
            res.statusCode = 200;

            file = fs.createReadStream(pathname);
            file.on('open', function() {
                file.pipe(res);

                console.log('200: ' + pathname);
            });

            file.on('error', function(err) {
                console.log('500: ' + err);
            });
        }
        else {
            res.writeHead(403);
            res.write('403 Forbidden\n');
            res.end();

            console.log('403: ' + pathname);
        }
    });

}).listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});
