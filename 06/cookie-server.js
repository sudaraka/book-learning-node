#!/usr/bin/env node

const PORT = 5000;

var http = require('http'),
    connect = require('connect'),
    serve_static = require('serve-static'),
    logger = require('morgan'),
    cookie_parser = require('cookie-parser'),
    cookie_session = require('cookie-session'),

    app = connect()
        .use(logger('dev'))
        .use(cookie_parser('mumble'))
        .use(cookie_session({keys: ['tracking']}))
        .use(clear_session)
        .use(track_user)
        .use(function(req, res, next) {
            console.log('Tracking ' + req.cookies.username);

            next();
        })
        .use(serve_static('./www', {index: ['cookie.html']}));

// Clear all session data
function clear_session(req, res, next) {
    if('/clear' === req.url) {
        req.session = null;
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
    else {
        next();
    }
}

// Track user
function track_user(req, res, next) {
    req.session.ct = req.session.ct || 0;
    req.session.username = req.session.username || req.cookies.username;

    console.log(req.cookies.username + ' requested ' + req.session.ct++
                + ' resources this session');

    next();
}

http.createServer(app).listen(PORT, function() {
    console.log('Server listening on port ' + PORT);
});
