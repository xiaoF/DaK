angular.module('ngStomp', []).
  provider('stompFactory', function () {

    // expose to provider
    this.$get = ['$timeout','GLOBAL_CONSTANT','ngNotify', function ($timeout,GLOBAL_CONSTANT,ngNotify) {
      ngNotify.config({
        theme: 'pure',
        position: 'top',
        duration: 3000,
        type: 'info',
        sticky: false,
        html: false
      });

      var asyncAngularify = function (stomp, callback) {
        return callback ? function () {
          var args = arguments;
          $timeout(function () {
            callback.apply(stomp, args);
          }, 0);
        } : angular.noop;
      };

      return function stompFactory() {
        var client = Stomp.client(GLOBAL_CONSTANT.MQ.HOST)
  client.connect(GLOBAL_CONSTANT.MQ.USERNAME, GLOBAL_CONSTANT.MQ.PASSWORD, function(frame) {

    console.log(1);
    angular.forEach(GLOBAL_CONSTANT.MQ.SUBSCRIBE, function (subject) {

      client.subscribe(subject, function(message) {
        ngNotify.set(message.body, 'error');
        console.log(message)
        //$scope.$apply(function(){
        //  $scope.chatlogs[0].push(JSON.parse(message.body));
        //})
        //$ionicScrollDelegate.$getByHandle('chatScroll').scrollBottom()
      });

    });

});

        var wrappedStomp = {
          log: function () {
          console.log("log")
          }
        };

        return wrappedStomp;
      };
    }];
  });
