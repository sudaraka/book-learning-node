#!/usr/bin/env node

var InputChecker = require('inputcheck').InputChecker;
    ic = new InputChecker('Suda', 'output');

ic.on('write', function(data) {
    this.writeStream.write(data, 'utf8');
});

// addListener = on
ic.addListener('echo', function(data) {
    console.log(this.name + ' wrote ' + data);
});

ic.on('end', function() {
    process.exit();
});

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
    ic.check(input);
});
