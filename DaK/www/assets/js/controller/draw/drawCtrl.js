/**
 * Created by xiaoF on 15/9/2.
 */
  app.controller("drawCtrl", ["$scope","socketService","boardService",
    function ($scope,socketService,boardService) {
    boardService.bind("board:saveSessionStorage",function(data){
      socketService.emit("board:send",data)
    })

    socketService.on('board:message', function (data) {
      console.log("board:message");
      boardService.setWebStorage(data);
    })

    }]);
