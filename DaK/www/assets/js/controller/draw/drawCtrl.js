/**
 * Created by xiaoF on 15/9/2.
 */
  app.controller("drawCtrl", ["$scope","socketService",
    function ($scope,socketService) {
      $scope.emitU=function(){
        socketService.emit("end")
      }
      socketService.on('sayHi',function(data){
        console.log("sayHi");
      })
      socketService.on('sayBye',function(data){
        console.log("sayBye");
        socketService.emit("end")
      })
    }]);
