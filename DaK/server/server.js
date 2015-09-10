var app = require('koa')();
var server = require('http').createServer(app.callback());
var io = require('socket.io')(server);
io.on('connection', function (socket) {
    socket.on('board:send', function (data) {
    console.log("board:send")
    socket.broadcast.emit('board:message', data);
  });
});
server.listen(3000);


//var app = require('koa')();
//var server = require('http').createServer(app.callback());
//var io = require('socket.io')(server);
//io.on('connection', function (socket) {
//  socket.on('board:send', function (data) {
//    console.log("board:send")
//    socket.emit('board:message', data);
//  });
//});
//server.listen(3000);

