const http = require("http");
const fs = require("fs");

http.createServer(function(req,res){
    fs.readFile("index.html",function(err,data){    
        if(err){
            res.writeHead(500, {"Content-type":"text/plain"});
            res.end("Internal Server Error");
        } else {
            res.writeHead(200,{"Content-type":"text/html"});
            res.write(data);
            res.end();
        }

    });

}).listen(8888);