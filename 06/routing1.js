#!/usr/bin/env node

const PORT = 5000;

var crossroads = require('crossroads'),
    http = require('http');

crossroads.addRoute('/category/{type}/:pub:/:id:', function(type, pub, id) {
    if(!id && !pub) {
        console.log('Accessing all entries of category ' + type);

        return;
    }
    else if(!id) {
        console.log('Accessing all entries of category ' + type + ' and pub '
                    + pub);

        return;
    }
    else {
        console.log('Accessing item ' + id + ' of pub ' + pub
                    + ' of category ' + type);
    }
});

http.createServer(function(req, res) {
    crossroads.parse(req.url);

    res.end('and that\'s all\n');
}).listen(PORT, function() {
    console.log('Server listening on port ' + PORT);
});
