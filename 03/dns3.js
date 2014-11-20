var dns = require('dns');

dns.resolve('rad.sw.org', 'NS', function(err, domains) {
    domains.forEach(function(domain) {
        console.log(domain);
    });
});
