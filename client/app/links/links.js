angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = {};
  $scope.link = {};
  Links.getAll().then( function (data) {
    $scope.data.links = data;
  });
  // maybe??
  $scope.signout = Auth.signout;
});
