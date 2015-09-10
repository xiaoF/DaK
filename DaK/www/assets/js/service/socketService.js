app.factory('socketService',  ["socketFactory",
  function (socketFactory) {
  return socketFactory({
    ioSocket: io.connect('http://127.0.0.1:3000/')
  });
}])


app.factory('boardService',  ["boardFactory",
  function (boardFactory) {
    return boardFactory({
      name:'myBoard'
    });
  }])
