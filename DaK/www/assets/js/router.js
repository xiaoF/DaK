app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        //.state('chatDetail', {
        //  //cache: true,
        //  url: '/chatDetail/:personId',
        //  templateUrl: "tpl/chatDetail.html",
        //  controller:'chatDetailController',
        //  onEnter:function(){
        //  },
        //  onExit:function(){
        //  }
        //})
        .state('dash', {
            url: '/dash',
            templateUrl: "assets/tpl/dash/dash.html",
            controller:'dashCtrl'
        })
        .state('posts', {
            url: '/posts',
            templateUrl: "assets/tpl/posts/posts.html",
            controller:'postsCtrl'
        })
        .state('v2ex', {
            params: {nodeURL:null},
            url: '/v2ex',
            templateUrl: "assets/tpl/v2ex/v2ex.html",
            controller:'v2exCtrl'
        })
        .state('dak', {
            url: '/dak',
            templateUrl: "assets/tpl/dak/dak.html",
            controller:'dakCtrl'
        })
        .state('post', {
          params: {content:null,commentData:null},
          url: '/post',
          templateUrl: "assets/tpl/posts/post.html",
          controller:'postCtrl'
        })
    $urlRouterProvider.otherwise('/v2ex');
});
