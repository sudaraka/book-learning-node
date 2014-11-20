var execfile = require('child_process').execFile,
    child;

child = execfile('./app.js', function(error, stdout, stderr) {
    if(null === error) {
        console.log('stdout: ' + stdout);
    }
    else {
        console.log('stderr: ' + stderr);
    }
});
