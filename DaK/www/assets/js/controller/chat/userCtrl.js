/**
 * Created by xiaoF on 15/9/2.
 */
app.controller("userCtrl", ["$scope","stompService","$state","chatService","stompService",
    function ($scope,stompService,$state,chatService,stompService) {
      $scope.user=$state.params.user
      $scope.$on('$destroy', function (data) {
        console.log("$destroy user")
        // say goodbye to your controller here
        // release resources, cancel request...
      })
      //setInterval(function(){
      //  stompService.send("a")
      //},5000)
    }]);
