
var fs = require('fs');

module.exports = function(path, message_404, message_403) {
    if(3 > arguments.length) {
        throw new Error('missing parameter in forbid-dir');
    }

    return function(req, res, next) {
        var pathname = path + req.url;

        fs.stat(pathname, function(err, stats) {
            if(err) {
                res.writeHead(400);
                res.write(message_404);
                res.end();
            }
            else if(!stats.isFile() && '/' !== req.url) {
                res.writeHead(403);
                res.write(message_403);
                res.end();
            }
            else {
                next();
            }
        });
    };
};
