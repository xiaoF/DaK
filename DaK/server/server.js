var app = require('koa')();
var server = require('http').createServer(app.callback());
var io = require('socket.io')(server);
io.on('connection', function (data) {
console.log("connection");
  io.emit('sayHi', { for: 'everyone' });
  io.emit('sayBye');
});

io.on('end', function (data) {
  console.log("end");
});


//io.emit('dak~sayHi', function (data) {
//  console.log("dak~sayHi");
//});
server.listen(3000);
