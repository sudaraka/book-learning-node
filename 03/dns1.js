var dns = require('dns');

dns.lookup('rad.sw.org', function(err, ip) {
    if(err) {
        throw err;
    }

    console.log(ip);
});
