/**
 * Created by xiaoF on 15/9/2.
 */
  app.controller("drawCtrl", ["$scope","socketService","boardService",
    function ($scope,socketService,boardService) {
      $scope.title ="1"
    boardService.bind("board:saveSessionStorage",function(data){
      socketService.emit("board:send",data)
    })

    socketService.on('board:message', function (data) {
      console.log("board:message");
      boardService.setWebStorage(data);
    })
      $scope.$on('$destroy', function (data) {
        console.log("$destroy")
        // say goodbye to your controller here
        // release resources, cancel request...
      })
    }]);
