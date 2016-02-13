angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = {};
  $scope.signout = Auth.signout;
  
  var initializeLinks = function() {
    Links.getAll().then( function (links) {
      $scope.data.links = links;
    })
    .catch(function(err){
      console.error(err);
    });
  };

  initializeLinks();
});
