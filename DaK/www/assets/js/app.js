// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('dak', ['ionic','btford.markdown'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
//decorator
app.constant("GLOBAL_CONSTANT", {
  //https://www.v2ex.com/api/topics/show.json?node_name=all4all
  //GITHUBAPIHOST:"https://api.github.com/repos/",
  //https://api.github.com/repos/lifesinger/lifesinger.github.com/issues
  //https://api.github.com/lifesinger/lifesinger.github.com/issues?callback=angular.callbacks._0
  GITHUBAPIHOST:"https://api.github.com/",
  POSTS: [{
    NAME:"lifesinger",
    REPO:"lifesinger.github.com"
  },{
    NAME:"amfe",
    REPO:"article"
  },{
    NAME:"hax",
    REPO:"hax.github.com"
  },{
    NAME:"maxzhang",
    REPO:"maxzhang.github.com"
  },{
    NAME:"yisibl",
    REPO:"blog"
  },{
    NAME:"wintercn",
    REPO:"blog"
  },{
    NAME:"xufei",
    REPO:"blog"
  }],
  V2EXAPIHOST:"https://www.v2ex.com/api/",
  NODES: [{
    NAME:"最热",
    URL:"topics/hot.json"
  },{
    NAME:"最新",
    URL:"topics/hot.json"
  },{
    NAME:"深圳",
    URL:"topics/show.json?node_name=shenzhen"
  },{
    NAME:"交易",
    URL:"topics/show.json?node_name=all4all"
  },{
    NAME:"酷工作",
    URL:"topics/show.json?node_name=jobs"
  },{
    NAME:"奇思妙想",
    URL:"topics/show.json?node_name=ideas"
  },{
    NAME:"技术",
    URL:"topics/show.json?node_name=tech"
  },{
    NAME:"问与答",
    URL:"topics/show.json?node_name=qna"
  }
  ]
})
