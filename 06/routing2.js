#!/usr/bin/env node

const PORT = 5000;

var crossroads = require('crossroads'),
    http = require('http'),
    type_route = crossroads.addRoute('/{type}/{id}');

function on_type_access(type, id) {
    console.log('access ' + type + ' ' + id);
}

type_route.matched.add(on_type_access);

http.createServer(function(req, res) {
    crossroads.parse(req.url);

    res.end('processing\n');
}).listen(PORT, function() {
    console.log('Server listening on port ' + PORT);
});
