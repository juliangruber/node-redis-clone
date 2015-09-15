var Redis = require('.');
var net = require('net');

var redis = new Redis();
net.createServer(redis.handle).listen(7777, function(){
  console.log('Listening on localhost 7777');
});

