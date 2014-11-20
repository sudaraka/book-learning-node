var http = require('http');

var options = {
    method: 'GET',
    socketPath: '/tmp/unix-js-server-sock',
    path: '/?file=tcpcli.js'
};

var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));

    res.setEncoding('utf8');

    res.on('data', function(chunk) {
        console.log('chunk o\' data: ' + chunk);
    });
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

req.write('data\n');
req.write('data\n');
req.end();
