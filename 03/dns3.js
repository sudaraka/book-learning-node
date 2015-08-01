var dns = require('dns');

dns.resolve('sudaraka.org', 'NS', function(err, domains) {
    domains.forEach(function(domain) {
        console.log(domain);
    });
});
