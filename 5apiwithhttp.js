var http = require('http');
var data = {Name:'Aniekt',Last:'Zade',Mail:'aniketzade578@gmail.com'}
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application\json'});

    res.write(JSON.stringify(data));
    res.end();
}).listen(209)