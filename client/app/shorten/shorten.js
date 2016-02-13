angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};

  $scope.addLink = function () {
    $socpe.loading = true;
    Links.addOne($scope.link)
      .then(function(){
        $scope.loading = false;
        $location.path('/')
      })
      .catch(function(err) {
        console.error(err);
      });
  };

  $scope.signout = Auth.signout;
});
