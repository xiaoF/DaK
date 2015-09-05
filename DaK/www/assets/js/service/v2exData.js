/**
 * Created by mac on 15-9-5.
 */



//app.factory("v2exData", ["GLOBAL_CONSTANT", "$q", "$http",
//  function (GLOBAL_CONSTANT, $q, $http) {
//    return  {
//      getNode: function () {
//        var deferred = $q.defer();
//        $http.jsonp(url+'?callback=JSON_CALLBACK', {
//          params: {}
//        }).success(function(data, status, headers, config) {
//          //加载成功之后做一些事
//          deferred.resolve(data);
//        }).error(function(data, status, headers, config) {
//          //处理错误
//          deferred.reject({data:data,status:status});
//        });
//        return deferred.promise;
//      }
//    }
//  }]);
