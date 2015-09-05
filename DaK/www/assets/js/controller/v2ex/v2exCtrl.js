/**
 * Created by xiaoF on 15/9/2.
 */
  app.controller("v2exCtrl", ["$scope", "utils","$state","GLOBAL_CONSTANT",
    function ($scope, utils,$state,GLOBAL_CONSTANT,$stateParams) {
      $scope.menuList = GLOBAL_CONSTANT.NODES

      if($stateParams==undefined){
      $scope.currentURL="topics/show.json?node_name=shenzhen";
      }else{
        $scope.currentURL=$stateParams.nodeURL;
      }
      utils.getData(GLOBAL_CONSTANT.V2EXAPIHOST+$scope.currentURL).then(function(data){
        $scope.comments=data.data;
        console.log($scope.comments)
      })

    }]);
