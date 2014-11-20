var net = require('net');

var client = new net.Socket();

client.setEncoding('utf8');

// Connect to server
client.connect(8000, 'localhost', function() {
    console.log('connected to server');
    client.write('Who needs a browser to communicate?');
});

// Prepare for input from terminal
process.stdin.resume();

// When receive data, send to server
process.stdin.on('data', function(data) {
    client.write(data);
});

//When receive data back, print to console
client.on('data', function(data) {
    console.log(data);
});

//When server closed
client.on('close', function() {
    console.log('connection is closed');
});
