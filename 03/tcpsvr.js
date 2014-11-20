var net = require('net');

net.createServer(function(con) {
    console.log('connected');

    con.on('data', function(data) {
        console.log(data + ' from ' + con.remoteAddress + ':' + con.remotePort);
        con.write('Repearing: ' + data);
    });

    con.on('close', function() {
        console.log('client closed connection');
    });

}).listen(8000, function() {
    console.log('listening on port 8000');
});
