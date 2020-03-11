var http = require('http');
var nStatic = require('node-static');
var fileServer = new nStatic.Server('./flowergarden');

http.createServer((req, res) => {
  fileServer.serve(req, res);
}).listen(8000);

