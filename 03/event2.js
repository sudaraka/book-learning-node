var util = require('util');
var EM = require('events').EventEmitter;
var fs = require('fs');

function inputChecker(name, file) {
    this.name = name;
    this.writeStream = fs.createWriteStream('./' + file + '.txt', {
        'flags': 'a',
        'encoding': 'utf8',
        'mode': 0666
    });
}

util.inherits(inputChecker, EM);

inputChecker.prototype.check = function(input) {
    var command = input.toString().trim().substr(0, 3);

    if('wr:' === command) {
        this.emit('write', input.substr(3, input.length));
    }
    else if('en:' === command) {
        this.emit('end');
    }
    else {
        this.emit('echo', input);
    }
};

var ic = new inputChecker('Shelley', 'output');

ic.on('write', function(data) {
    this.writeStream.write(data, 'utf8');
});

ic.on('echo', function(data) {
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
