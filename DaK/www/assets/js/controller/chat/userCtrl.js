/**
 * Created by xiaoF on 15/9/2.
 */
app.controller("userCtrl", ["$scope","stompService","$state","chatService",
    function ($scope,stompService,$state,chatService) {
      $scope.user=$state.params.user
    }]);
