var dns = require('dns');

dns.reverse('192.168.123.1', function(err, domains) {
    domains.forEach(function(domain) {
        console.log(domain);
    });
});
