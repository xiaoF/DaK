var app = require('koa')();
var server = require('http').createServer(app.callback());
var io = require('socket.io')(server);
io.on('connection', function (socket) {
console.log("connection");
  socket.emit('sayHi', { for: 'everyone' });
  socket.emit('sayBye');
  socket.on('end', function (data) {
    console.log("end");
  });
});




//io.emit('dak~sayHi', function (data) {
//  console.log("dak~sayHi");
//});
server.listen(3000);
