angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.link = {};
  Links.getAll().then( function (data) {
    $scope.data.links = data;
  });
});
