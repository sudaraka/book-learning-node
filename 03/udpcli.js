var dgram  = require('dgram');

var client = new dgram.createSocket('udp4');

// Prepare for input from terminal
process.stdin.resume();

// When receive data, send to server
process.stdin.on('data', function(data) {
    console.log(data.toString());

    client.send(data, 0, data.length, 8000, 'localhost', function(err, bytes) {
        if(err) {
            console.log('error: ' + err);
        }
        else {
            console.log('successful');
        }
    });
});
