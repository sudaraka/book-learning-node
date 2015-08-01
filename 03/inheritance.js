var util = require('util');

// Top level object
function First() {
    var self = this;

    this.name = 'first';

    this.test = function() {
        console.log(self.name);
    };
}

First.prototype.output= function() {
    console.log(this.name);
};

// Inherit from Top level
function Second() {
    Second.super_.call(this);

    this.name = 'second';
}

util.inherits(Second, First);

function Third(func) {
    this.name = 'third';
    this.call_method = func;
}

var two = new Second(),
    three1 = new Third(two.test),
    three2 = new Third(two.output);

two.test();
two.output();
three1.call_method();
three2.call_method();
