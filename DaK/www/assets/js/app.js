// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('dak', ['ionic', 'btford.markdown','btford.socket-io','ngDrawingBoard','ngStomp','ngNotify','ngChat','ngLocker'])

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    document.getElementById('loading-cover').classList.add('done');
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.run(["$rootScope","$ionicViewSwitcher","$state","ngNotify",function ($rootScope,$ionicViewSwitcher,$state,ngNotify) {
  $rootScope.onClickDashTab = function(){
    $ionicViewSwitcher.nextTransition("none");
    $state.go('dash');
  }
  $rootScope.onClickPostTab = function(){
      $ionicViewSwitcher.nextTransition("none");
      $state.go('posts');
  }
  $rootScope.onClickChatTab = function(){
      $ionicViewSwitcher.nextTransition("none");
      $state.go('chat');
  }
  $rootScope.onClickDrawTab = function(){
      $ionicViewSwitcher.nextTransition("none");
      $state.go('draw');
  }

  $rootScope.safeApply = function(fn) {
    var phase = $rootScope.$$phase;
    if (phase == '$apply' || phase == '$digest') {
      if (fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

  ngNotify.config({
    theme: 'pure',
    position: 'top',
    duration: 3000,
    sticky: false,
    html: false
  });
}]);
//decorator
app.constant("GLOBAL_CONSTANT", {
  //https://www.draw.com/api/topics/show.json?node_name=all4all
  //GITHUBAPIHOST:"https://api.github.com/repos/",
  //https://api.github.com/repos/lifesinger/lifesinger.github.com/issues
  //https://api.github.com/lifesinger/lifesinger.github.com/issues?callback=angular.callbacks._0
  GITHUBAPIHOST: "https://api.github.com/",
  POSTS: [{
    NAME: "lifesinger",
    REPO: "lifesinger.github.com"
  }, {
    NAME: "amfe",
    REPO: "article"
  }, {
    NAME: "hax",
    REPO: "hax.github.com"
  }, {
    NAME: "maxzhang",
    REPO: "maxzhang.github.com"
  }, {
    NAME: "yisibl",
    REPO: "blog"
  }, {
    NAME: "wintercn",
    REPO: "blog"
  }, {
    NAME: "xufei",
    REPO: "blog"
  }],
  DRAWINGBOARD:{
    TAGID:"myBoard"
  },
  SOCKETIO:{
    //HOST:"http://172.23.2.166:3000/"
    HOST:"http://jxj1.wicp.net/"
  },
  MQ:{
    //HOST:"ws://172.23.2.166:61614",
    HOST:"ws://testnode.wicp.net",
    USERNAME:"admin",
    PASSWORD:"password",
    SUBSCRIBE:["/topic/chat"]
  }
})
