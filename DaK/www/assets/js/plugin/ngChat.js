angular.module('ngChat', []).
  provider('chatFactory', function () {

    // expose to provider
    this.$get = ['$timeout', 'GLOBAL_CONSTANT', 'ngNotify', '$rootScope', function ($timeout, GLOBAL_CONSTANT, ngNotify, $rootScope) {

      var self = this;
      self._initUser = function (data) {
        $q.when(function (data) {
          $rootScope.chatCache[data.id] = {}
          return data;
        }).then(function (data) {
          $rootScope.chatCache[data.id]["id"] = data.id;
          $rootScope.chatCache[data.id]["name"] = data.name;
          $rootScope.chatCache[data.id]["badge"] = data.badge;
          $rootScope.chatCache[data.id]["records"] = [];
        })
      }
      self._updateBadge = function (data) {

      },
      self._getUserInfo = function (data) {

      },
      self._getChatCache = function (data) {

      }

      $rootScope.chatCache = {};
      $rootScope.chatBadge = 0;

      //var asyncAngularify = function (stomp, callback) {
      //  return callback ? function () {
      //    var args = arguments;
      //    $timeout(function () {
      //      callback.apply(stomp, args);
      //    }, 0);
      //  } : angular.noop;
      //};

      return function chatFactory() {

        var wrappedChat = {
          set: function (data) {
            if (typeof $rootScope.chatCache[data.id] == "undefined") {
              self._initUser(data)
            }
            $rootScope.chatCache[data.id]["records"].push(data.body);
          },
          clearBadge: function () {

          }
        };

        return wrappedChat;
      };
    }];
  });
