var app = angular.module("Dapp", [])
app.controller("DappCtrl", function($scope) {
  $scope.status = ["All good!", "Gandhi probably wouldn't...", "Danger! You's prolly fsckkued up~!"];
  $scope.green = true;
  $scope.yellow = false;
  $scope.red = false;
});
