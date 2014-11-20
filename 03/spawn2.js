var spawn = require('child_process').spawn,
    find = spawn('find', ['.', '-ls']),
    grep = spawn('grep', ['svr']);

grep.stdout.setEncoding('utf8');

// Direct results of find to grep
find.stdout.on('data', function(data) {
    grep.stdin.write(data);
});

//Now run grep and output result
grep.stdout.on('data', function(data) {
    console.log(data);
});

// Error handling for both
grep.stderr.on('data', function(data) {
    console.log('grep stderr: ' + data);
});

find.stderr.on('data', function(data) {
    console.log('find stderr: ' + data);
});

// And, exist handling for both
find.on('close', function(code) {
    if(0 !== code) {
       console.log('find process exited with code ' + code);
    }

    // Go ahead and end grep process
    grep.stdin.end();
});

grep.on('exit', function(code) {
    if(0 !== code) {
       console.log('grep process exited with code ' + code);
    }
});
