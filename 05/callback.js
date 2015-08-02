#!/usr/bin/env node

var obj = function() {};

obj.prototype.do_something = function(arg1, arg2_) {
    var arg2 = typeof arg2_ === 'string' ? arg2_ : null,
        callback_ = arguments[arguments.length - 1],
        callback = typeof callback_ === 'function' ? callback_ : null;

    if(!arg2) {
        return callback(new Error('second argument missing or not a string'));
    }

    callback(null, arg1);
};

var test = new obj();

try {
    test.do_something('test', 3.55, function(err, value) {
        if(err) {
            throw err;
        }

        console.log('Ok: ' + value);
    });
}
catch(e) {
    console.log(e);
}
