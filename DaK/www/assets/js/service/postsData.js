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

app.factory("postsData", ["GLOBAL_CONSTANT","$q","$http",
    function(GLOBAL_CONSTANT,$q,$http) {
        return angular.extend({},{
            all: function() {
                var promises = [];
                angular.forEach(GLOBAL_CONSTANT.POSTS , function(post) {

                    var promise = $http.jsonp(GLOBAL_CONSTANT.GITHUBAPIHOST + post.NAME+'/'+ post.REPO+'/'+'/issues?callback=JSON_CALLBACK', {
                        params: {}
                    })
                    promises.push(promise);
                });
                return $q.all(promises);
            }
        })
    }]);