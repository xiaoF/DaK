angular.module('ngChat', []).
  provider('chatFactory', function () {

    // expose to provider
    this.$get = ['$timeout', 'GLOBAL_CONSTANT', 'ngNotify', '$rootScope','userService','$state','ngNotify','$q',
      function ($timeout, GLOBAL_CONSTANT, ngNotify, $rootScope,userService,$state,ngNotify,$q) {

      var self = this;
      self._initUser = function (data) {
        $rootScope.chatCache[data.id] = {}
        var userinfo= self._getUserInfo(data.id)
        $rootScope.chatCache[data.id]["id"] = data.id;
        $rootScope.chatCache[data.id]["name"] = userinfo.name;
        $rootScope.chatCache[data.id]["face"] = userinfo.face;
        $rootScope.chatCache[data.id]["records"] = [];
        $rootScope.chatCache[data.id]["badge"] = 0;

      }
      self._notify = function (currentID,data) {
        if(currentID != data.id){
          $rootScope.safeApply(function(){
            ++$rootScope.chatCache[data.id]["badge"];
            ++$rootScope.chatBadge;
          })
          ngNotify.set($rootScope.chatCache[data.id]["name"]+":"+data.msg.body, 'info');
        }
      },
      self._getUserInfo = function (userID) {
        return userService.get(userID)
      },
      self._getChatCache = function (data) {

      },
      self._pushMsg = function (data) {
        $rootScope.safeApply(function() {
          $rootScope.chatCache[data.id]["records"].push(data.msg);
          //$rootScope.chatCache[data.id]["records"].unshift(data.msg);
        })
      },
      self._clearBadge = function (userID) {
        $rootScope.safeApply(function() {
          $rootScope.chatBadge-=$rootScope.chatCache[userID]["badge"];
          $rootScope.chatCache[userID]["badge"] = 0;
        })
      }

      $rootScope.chatCache = {};
      $rootScope.chatBadge = 0;


      return function chatFactory() {

        var wrappedChat = {
          set: function (data) {
              if (typeof $rootScope.chatCache[data.id] == "undefined") {
                self._initUser(data)
              }
              self._pushMsg(data);
              self._notify($state.params.user,data)
          },
          clearBadge: function (userID) {
            self._clearBadge(userID)
          }
        };

        return wrappedChat;
      };
    }];
  });
