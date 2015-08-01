#!/usr/bin/env node

var colors = require('colors');

console.log('');

console.log('Sudaraka Wijesinghe'.rainbow.bold);
console.log('Learning Node'.zebra.underline);
console.log('');


colors.setTheme({
    error: 'red',
    warn: 'yellow',
    note: 'cyan'
});

console.log('This is a Note.'.note);
console.log('This is a Warning!!!.'.warn);
console.log('Error!'.error);
console.log('');

