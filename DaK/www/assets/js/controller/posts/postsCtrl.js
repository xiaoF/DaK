/**
 * Created by xiaoF on 15/9/2.
 */
app.controller("postsCtrl", ["$scope","postsData",
    function ($scope,postsData) {
        $scope.postsData = postsData.all()
        console.log($scope.postsData)
    }]);