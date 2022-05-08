var http = require('http');
var page ='<h1>Hello World</h1>'
'<h1>kya be</h1>'
{/* <h>To Enter into the World Press Enter Given Below:</h><br>
<button>Enter</button>' */}
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application\html'})
    res.write(page)
    res.end();
}).listen(301)