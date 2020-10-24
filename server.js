var http = require('http');
var executor = function() {
    return;
}
http.createServer(function(req, res) {
    setTimeout(()=>{
        var q = require('url').parse(req.url, true).query;
        var code = q.code?q.code:200;
        let rawData = null;
        try{
        rawData = require('fs').readFileSync('data/'+require('url').parse(req.url, true).pathname+'.json');
        } catch(e) {
            res.writeHead(404);
            res.end('{"data":"none"}');
            return;
        }
        res.writeHead(code, {'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*', 'Access-Control-Request-Method':'*', 'Access-Control-Allow-Methods':'OPTIONS,GET,POST', 'Access-Control-Allow-Headers':'*'});
        if(req.method==='OPTIONS') {
            res.writeHead(200);
            res.end();
            return;
        }
        res.end(JSON.stringify(JSON.parse(rawData)));
    }, 3000);
}).listen(8082);