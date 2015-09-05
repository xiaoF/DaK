/**
 * Created by xiaoF on 15/9/2.
 */
app.controller("postsCtrl", ["$scope", "postsData","$state",
  function ($scope, postsData,$state) {
    $scope.allData=[];
    $scope.posts=[];
    $scope.postIndex=0;
    postsData.all()
      .then(function (data) {
        $scope.allData = data
        $scope.posts=$scope.allData.slice(0,20);
        $scope.postIndex=20;
      }).then(function(){
        console.log($scope.posts)
      })

    $scope.loadMore=function(){
      angular.forEach($scope.allData.slice($scope.postIndex,$scope.postIndex+20),function (post) {
        $scope.posts.push(post)
      })
      $scope.postIndex+=20;
      $scope.$broadcast('scroll.infiniteScrollComplete');
    }
    $scope.loadPost=function(body,url){
      $state.go('post',{content:body,commentData:url});
    }
  }]);
