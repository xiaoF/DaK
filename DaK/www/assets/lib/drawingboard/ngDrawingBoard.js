/*
 * @license
 * angular-socket-io v0.7.0
 * (c) 2014 Brian Ford http://briantford.com
 * License: MIT
 */

angular.module('ngDrawingBoard', []).
  provider('boardFactory', function () {


    // expose to provider
    this.$get = ['$timeout', function ($timeout) {

      var asyncAngularify = function (Board, callback) {
        return callback ? function () {
          var args = arguments;
          $timeout(function () {
            callback.apply(Board, args);
          }, 0);
        } : angular.noop;
      };

      return function boardFactory (options) {
        options = options || {};
        //var socket = options.ioSocket || io.connect();
        //var prefix = options.prefix === undefined ? defaultPrefix : options.prefix ;
        //var defaultScope = options.scope || $rootScope;

        var defaultBoard = new DrawingBoard.Board(options.name);

        var wrappedBoard = {
          setWebStorage:function(data){
            defaultBoard.setWebStorage(data);
          },
          restoreWebStorage:function(){
            defaultBoard.restoreWebStorage();
          },
          bind: function (eventName, callback) {
            defaultBoard.ev.bind(eventName, asyncAngularify(defaultBoard, callback));
          }
        };

        return wrappedBoard;
      };
    }];
  });
