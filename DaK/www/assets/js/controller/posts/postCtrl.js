/**
 * Created by xiaoF on 15/9/2.
 */
app.controller("postCtrl", ["$scope","$state","utils",
  function ($scope,$state,utils) {
    console.log($state);
    $scope.mdContent=$state.params.content
    utils.getData($state.params.commentData).then(function(data){
      $scope.comments=data.data;
    }).catch(function(error){
                    console.log(error)
      $state.go("posts")
    })
  }]);
