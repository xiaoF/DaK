/**
 * Created by mac on 15-9-10.
 */
app.factory('boardService',  ["boardFactory","GLOBAL_CONSTANT",
  function (boardFactory,GLOBAL_CONSTANT) {
    console.log("boardFactory")
    return boardFactory({
      name:GLOBAL_CONSTANT.DRAWINGBOARD.TAGID
    });
  }])
