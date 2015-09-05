/**
 * Created by xiaoF on 15/9/2.
 */
//app.factory("postsData", ["GLOBAL_CONSTANT","$q","$http",
//    function(GLOBAL_CONSTANT,$q,$http) {
//        return {
//            all: function() {
//                var promises = [];
//                angular.forEach(GLOBAL_CONSTANT.POSTS , function(post) {
//
//                    var promise = $http.jsonp(GLOBAL_CONSTANT.GITHUBAPIHOST +'repos/'+ post.NAME+'/'+ post.REPO+'/issues?callback=JSON_CALLBACK', {
//                            params: {}
//                        })
//                    promises.push(promise);
//                });
//                return $q.all(promises);
//            }
//        }
//    }]);

app.factory("postsData", ["GLOBAL_CONSTANT", "$q", "$http",
  function (GLOBAL_CONSTANT, $q, $http) {
    return  {
      all: function () {
        var promises = [];
        var workDone=false;
        angular.forEach(GLOBAL_CONSTANT.POSTS, function (post) {

          var promise = $http.jsonp(GLOBAL_CONSTANT.GITHUBAPIHOST+ 'repos/' + post.NAME + '/' + post.REPO + '/issues?callback=JSON_CALLBACK', {
            params: {}
          })
          promises.push(promise);
        });
        return $q.all(promises).then(function(data) {
          var posts = []
            if(posts.length ===0 ){
              for(var i=0;i<data.length;i++){
                if(data[i].data.meta.status == 200){
                  posts.push(data[i].data.data[0]);
                  data[i].data.data.shift();
                  break;
                }
              }
          }
          angular.forEach(data, function (postArray) {
            if(postArray.data.meta.status == 200){
              angular.forEach(postArray.data.data, function (postObj) {
                for (var i = 0; i < posts.length; i++) {
                  if ((new Date(postObj.created_at).getTime()) >= (new Date(posts[i].created_at).getTime())) {
                    posts.splice(i, 0, postObj);
                    workDone=true
                    break;
                  }
                }
                if(!workDone){
                  posts.push(postObj);
                }
              })
            }
          });
          return posts
        });
      },
      comments: function (url) {
        var deferred = $q.defer();
        $http.jsonp(url+'?callback=JSON_CALLBACK', {
          params: {}
        }).success(function(data, status, headers, config) {
          //加载成功之后做一些事
          deferred.resolve(data);
        }).error(function(data, status, headers, config) {
          //处理错误
          deferred.reject({data:data,status:status});
        });
        return deferred.promise;
      }
    }
  }]);
