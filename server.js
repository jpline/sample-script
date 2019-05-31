//'use strict';

//const express = require('express'); 

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  console.log(`q.data`);
  var txt = "OK" + q.data;
  res.end(txt);
}).listen(8080);
