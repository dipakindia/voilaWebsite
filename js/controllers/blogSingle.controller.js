(function(){
  'use strict';

  angular.module('aha')
    .controller('BlogSingleController', BlogSingleController);

  BlogSingleController.$inject = ['$scope', '$window','$http' ,'$routeParams'];
  function BlogSingleController($scope, $window, $http, $routeParams) {
  var ctrl = this;
  ctrl.postId = $routeParams.postId;
  alert(ctrl.postId);
  /* $http({
        method : "GET",
        url : "http://34.193.119.231/shop-api/account/blog/post",
          headers: {
          'Content-Type': 'application/json',
          'Authorization':'Bearer '+localStorage.getItem('token'),
        }
    }).then(function mySuccess(response) {
       
       ctrl.blogPosts = response.data.items ;
        console.log(response);
    }, function myError(response) {
        ctrl.blogPosts = response.statusText;
    });*/
  
  }
})();
