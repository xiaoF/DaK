/**
 * Created by xiaoF on 15/9/2.
 */
app.controller("userCtrl", ["$scope","stompService","$state","chatService","stompService",
    function ($scope,stompService,$state,chatService,stompService) {
      if($state.params.user===null){
        window.location.href=window.location.href.split("#/")[0];
      }else{
        $scope.user=$state.params.user
        $scope.msg ="";
        $scope.send = function(){
          stompService.send($state.params.user,$scope.msg);
          $scope.msg ="";
        }
        $scope.$on('$destroy', function (data) {
          console.log("$destroy user")
          // say goodbye to your controller here
          // release resources, cancel request...
        })
      }
    }]);
