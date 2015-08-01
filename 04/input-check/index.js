var util = require('util')
    EM = require('events').EventEmitter,
    fs = require('fs');

exports.InputChecker = InputChecker;

function InputChecker(name, file) {
    this.name = name;
    this.writeStream = fs.createWriteStream('./' + file + '.txt', {
        'flags': 'a',
        'encoding': 'utf8',
        'mode': 0666
    });
}

util.inherits(InputChecker, EM);

InputChecker.prototype.check = function(input) {
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
