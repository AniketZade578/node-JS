var http = require('http');
http.createServer(function(req,res){
    res.write("dj bravo");
    res.end();
}).listen(200)