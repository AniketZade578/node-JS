var http = require('http');
var page = `
<h1>Do Register here:</h1>
<div>First name:</div><br>
<div>
<input type = 'text'>
</div><br>
<div>Last name:</div><br>
<input type = 'text'/><br>
<button>Submit</button>
`

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application\html'})
    res.write(page)
    res.end();
}).listen(301)