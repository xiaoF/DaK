angular.module('ngStomp', []).
  provider('stompFactory', function () {

    // expose to provider
    this.$get = ['$timeout','GLOBAL_CONSTANT','chatService', function ($timeout,GLOBAL_CONSTANT,chatService) {

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

    angular.forEach(GLOBAL_CONSTANT.MQ.SUBSCRIBE, function (subject) {

      client.subscribe(subject, function(message) {
        chatService.set(JSON.parse(message.body))
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
