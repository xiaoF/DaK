/**
 * Created by xiaoF on 15/9/2.
 */
app.controller("chatCtrl", ["$scope","stompService",
    function ($scope,stompService) {

    }]);
//$scope.client = Stomp.client("ws://localhost:61614?aaa=11&bbb=111");
////$scope.client.heartbeat.outgoing = 0;
////$scope.client.heartbeat.incoming = 0;
//
//
//// the client is notified when it is connected to the server.
//$scope.client.connect("admin", "password", function(frame) {
//  $scope.client.subscribe("/topic/chat", function(message) {
//    $scope.$apply(function(){
//      $scope.chatlogs[0].push(JSON.parse(message.body));
//    })
//    $ionicScrollDelegate.$getByHandle('chatScroll').scrollBottom()
//  });
//});
//
//$scope.$on('to-parent', function(event,data) {
//  console.log('ParentCtrl', data);	   //父级能得到值
//});
