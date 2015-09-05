/**
 * Created by xiaoF on 15/9/2.
 */
app.controller("postCtrl", ["$scope","$stateParams","postsData",
  function ($scope,$stateParams,postsData) {
    $scope.mdContent=$stateParams.content
    postsData.comments($stateParams.commentData).then(function(data){
      $scope.comments=data.data;
      console.log($scope.comments)
    })
  }]);
