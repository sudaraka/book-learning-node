#!/usr/bin/env node

const PORT = 5000;

var http = require('http'),
    connect = require('connect'),
    fs = require('fs'),
    favicon = require('serve-favicon'),
    serve_static = require('serve-static'),
    logger = require('morgan'),

    log_stream = fs.createWriteStream('./log.txt', {
        flags: 'a',
        encoding: 'utf8',
        mode: 0666
    }),

    app = connect()
        .use(logger('dev', {stream: log_stream}))
        .use(favicon('./www/assets/images/iojs.ico'))
        .use(serve_static('./www', {index: ['index.html']}));

http.createServer(app).listen(PORT, function() {
    console.log('Server listening on port ' + PORT);
});
