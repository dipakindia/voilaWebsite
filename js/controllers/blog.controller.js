(function(){
  'use strict';

  angular.module('aha')
    .controller('BlogController', BlogController);

  BlogController.$inject = ['$scope', '$window','$http'];
  function BlogController($scope, $window,$http) {
  var ctrl = this;
  //ctrl.authName = 'randy ortsdm';
  ctrl.dummy = [
  {
    "userId": 1,
    "id": 1,
    "img":"https://i.shopstyle-cdn.com/i/861f0aac-9503-41c1-9427-7a7d58c8ba3e/1d1-2bc/image.jpeg",
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "img":"https://i.shopstyle-cdn.com/i/a1cd3462-8e47-4f18-b3e9-c786d5ef93a1/2bb-2bc/image.jpeg",
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "img":"https://i.shopstyle-cdn.com/i/93cdd249-d97b-465d-932b-6f15b1462518/234-2bc/image.jpeg",
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 2,
    "img":"https://i.shopstyle-cdn.com/i/a1cd3462-8e47-4f18-b3e9-c786d5ef93a1/2bb-2bc/image.jpeg",
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "img":"https://i.shopstyle-cdn.com/i/93cdd249-d97b-465d-932b-6f15b1462518/234-2bc/image.jpeg",
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "img":"https://i.shopstyle-cdn.com/i/f4407427-3388-40ec-9979-55981f040328/230-2bc/image.jpeg",
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  }];
  
   $http({
        method : "GET",
        url : "https://jsonplaceholder.typicode.com/posts"// replace by blog api
    }).then(function mySuccess(response) {
       // ctrl.blogPosts = response.data;
       ctrl.blogPosts = ctrl.dummy ;
        console.log(ctrl.blogPosts);
    }, function myError(response) {
        ctrl.blogPosts = response.statusText;
    });
  
  }
})();
