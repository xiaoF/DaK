/**
 * Created by mac on 15-9-10.
 */
app.factory('boardService',  ["boardFactory",
  function (boardFactory) {
    return boardFactory({
      name:'myBoard'
    });
  }])
