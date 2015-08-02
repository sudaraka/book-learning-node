#!/usr/bin/env node

const PORT = 5000;

var http = require('http'),
    connect = require('connect'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),

    app = connect()
        .use(logger('dev'))
        .use(favicon('./www/assets/images/iojs.ico'))
        .use(function(req, res) {
            res.end('Hello World\n');
        });

http.createServer(app).listen(PORT, function() {
    console.log('Server listening on port ' + PORT);
});
