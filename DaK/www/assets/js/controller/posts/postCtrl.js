/**
 * Created by xiaoF on 15/9/2.
 */
app.controller("postCtrl", ["$scope","$stateParams","utils",
  function ($scope,$stateParams,utils) {
    $scope.mdContent=$stateParams.content
    utils.getData($stateParams.commentData).then(function(data){
      $scope.comments=data.data;
      console.log($scope.comments)
    })
  }]);
