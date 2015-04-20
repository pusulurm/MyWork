var http = require('http');

var express = require('express');
var myApp = express();
myApp.set('view engine','jade');
var users = [
    {
        userId : "101",
        name : "Murali"
    },
    {
        userId : "102",
        name : "Brahmaji"
    },
    {
        userId : "103",
        name : "Jag"
    }
];

myApp.get("/", function(req, res){
        //res.send('<html><body><h1>'+ req.url + '</h1></body></html>');
    res.render('jade/index',{title : 'Express + jade'});
});

myApp.get("/api/user",function(req, res){
    res.set('content-type','application/json');
    res.send(users);
});

var server = http.createServer(myApp);

server.listen(1337);



//var http = require('http');
//http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('Hello World\n');
//}).listen(1337, '127.0.0.1');
//console.log('Server running at http://127.0.0.1:1337/');