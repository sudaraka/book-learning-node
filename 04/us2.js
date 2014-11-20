#!/usr/bin/env node

var _ = require('underscore');

_.mixin({
    betterWithNode: function(str) {
        return str + ' is better with Node.';
    }
});

console.log(_.betterWithNode(['apple', 'cherry']));
