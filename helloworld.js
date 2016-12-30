var http = require('http');
var fs = require('fs');


//响应字符串
/*http.createServer(function(req,res){
 res.writeHead(200,{'Content-Type':'text/plain'});
 res.end('Hello wwmin\n');
 }).listen(3000);
 console.log("server running at http://localhost:3000/");*/

//读文件流
var str = "";
var stream = fs.createReadStream('./src/assets/data/resource.json');
stream.on('data', function (chunk) {
    console.log(chunk);
    str = chunk;
});
stream.on('end', function () {
    console.log('finish');
});
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(str);
}).listen(3000);
console.log("server running at http://localhost:3000/");
//响应图片
/*http.createServer(function(req,res){
 res.writeHead(200,{'Content-Type':'image/png'});
 fs.createReadStream('./src/assets/image/logo.png').pipe(res);
 }).listen(3000);
 console.log("server running at http://localhost:3000/");*/

