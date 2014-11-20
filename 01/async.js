var http = require('http');
var fs = require('fs');

    var counter = 0;
// Write out  numbers
function write_numbers(res) {

    // Increment global, write to client
    for(var i = 0; i < 100; i++) {
        counter++;
        res.write(counter.toString() + '\n');
    }
}

http.createServer(function(req, res)  {
    var query = require('url').parse(req.url).query;
    app = require('querystring').parse(query).file + '.txt';

    res.writeHead(200, {'content-type': 'text/plain'});

    write_numbers(res);

    // Timer to open file and read contents
    setTimeout(function() {
        console.log('Opening ' + app);

        // Open and read in file contents
        fs.readFile(app, 'utf8', function(err, data) {
            if(err) {
                res.write('Could not find or open "' + app + '" for reading\n');
            }
            else {
                res.write(data);
            }

            //Response is done
            res.end();
        });
    }, 2000);
}).listen(8000);

console.log('Server running on port 8000');
