var EM = require('events').EventEmitter;
var counter = 0;

var em = new EM();

setInterval(function() {
    em.emit('timed', counter++);
}, 3000);

em.on('timed', function(data) {
    console.log('timed: ' + data);
});
