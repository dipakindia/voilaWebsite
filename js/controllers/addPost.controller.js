(function(){
  'use strict';

  angular.module('aha')
    .controller('addPostController', addPostController)
    .service("uploadService", function($http, $q) {

    return ({
      upload: upload
    });

    function upload(file) {
      var upl = $http({
        method: 'POST',
        url: 'http://34.193.119.231/shop-api/account/blog/post/image?uploadType=simple', // /api/upload
        headers: {
          'Content-Type': 'image/jpg',
          'Authorization':'Bearer '+localStorage.getItem('token'),
        },
        data: {
          upload: file
        },
        transformRequest: function(data, headersGetter) {
          var formData = new FormData();
          angular.forEach(data, function(value, key) {
            formData.append(key, value);
          });

          var headers = headersGetter();
          delete headers['Content-Type'];

          return formData;
        }
      });
      return upl.then(handleSuccess, handleError);

    } // End upload function

    // ---
    // PRIVATE METHODS.
    // ---
  
    function handleError(response, data) {
      if (!angular.isObject(response.data) ||!response.data.message) {
        return ($q.reject("An unknown error occurred."));
      }

      return ($q.reject(response.data.message));
    }

    function handleSuccess(response) {
      return (response);
    }

  })
  .directive("fileinput", [function() {
    return {
      scope: {
        fileinput: "=",
        filepreview: "="
      },
      link: function(scope, element, attributes) {
        element.bind("change", function(changeEvent) {
          scope.fileinput = changeEvent.target.files[0];
          var reader = new FileReader();
          reader.onload = function(loadEvent) {
            scope.$apply(function() {
              scope.filepreview = loadEvent.target.result;
            });
          }
          reader.readAsDataURL(scope.fileinput);
        });
      }
    }
  }]);




  addPostController.$inject = ['$scope', '$http', 'uploadService'];

    function addPostController($scope, $http, uploadService) {

      var ctrl = this;
      ctrl.post = {};
      ctrl.postForm = postForm;

      function postForm(){
        console.log(ctrl.post);

         $http({
        method : "POST",
        url : "http://34.193.119.231/shop-api/account/blog/post",
         headers: {
          'Content-Type': 'application/json',
          'Authorization':'Bearer '+localStorage.getItem('token'),
        },
        data : ctrl.post 
    }).then(function mySuccess(response) {

        console.log(response); alert("post created successfully");
    }, function myError(response) {
        console.log(response);
    });

      }

   $scope.$watch('file', function(newfile, oldfile) {
      if(angular.equals(newfile, oldfile) ){
        return;
      }

      uploadService.upload(newfile).then(function(res){
        // DO SOMETHING WITH THE RESULT!
        console.log("result", res);
        ctrl.post.postImageId = res.data.id;
      })
    });


     
    }
 
})();



