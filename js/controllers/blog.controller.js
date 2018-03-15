(function(){
  'use strict';

  angular.module('aha')
    .controller('BlogController', BlogController);

  BlogController.$inject = ['$scope', '$window','$http'];
  function BlogController($scope, $window,$http) {
  var ctrl = this;
   $http({
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
    });
  
  }
})();
