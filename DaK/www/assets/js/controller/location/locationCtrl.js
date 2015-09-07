/**
 * Created by xiaoF on 15/9/2.
 */
  app.controller("locationCtrl", ["$scope", "utils","$state","GLOBAL_CONSTANT",
    function ($scope, utils,$state,GLOBAL_CONSTANT,$stateParams) {
      //$scope.menuList = GLOBAL_CONSTANT.NODES
      //
      //if($stateParams==undefined){
      //$scope.currentURL="topics/show.json?node_name=shenzhen";
      //}else{
      //  $scope.currentURL=$stateParams.nodeURL;
      //}
      //utils.getData(GLOBAL_CONSTANT.V2EXAPIHOST+$scope.currentURL).then(function(data){
      //  $scope.comments=data.data;
      //  console.log($scope.comments)
      //})

      // initialize the event list with 2 events
      $scope.calendar = [
        { d: new Date(2013, 10, 13), text: 'My Big Event' },
        { d: '12/25', text: 'Christmas' }
      ];
      $scope.eventText = '';
      // push an event to the calendar for today with the text set in eventText
      $scope.addEvent = function () {
        $scope.calendar.push({ d: new Date(), text: $scope.eventText });
      };
      // alert the selected event - onEventSelect handler
      $scope.eventSelected = function (e, event, d, inst) {
        alert(event.text + ' selected');
      };
    }]);
