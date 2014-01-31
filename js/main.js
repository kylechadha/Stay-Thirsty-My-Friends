var app = angular.module("Dapp", [])
app.controller("DappCtrl", function($scope) {
  $scope.status = ["All good!", "Not recommended...", "No! Don't do it!"];
  $scope.green = true;
  $scope.orange = false;
  $scope.red = false;
  $scope.times = [{time: "12PM", drinks:["s", "b"]}, {time: "1PM", drinks:["b", "m", "s"]}, {time: "2PM", drinks:["m"]}];

  $scope.drinkEvaluator = function(drink) {

  /*

  Inputs:
  1. The time
  2. How many drinks you want to take per hour
  3. How many drinks total you want to take up to a given hour

  Calculations:
  1. Per Hour Intake
  9PM = (Qb * B * 1) + (Qm * M * 1.5) + (Qs * S * 2)*/

  var found = false;
  var hour = new Date().getHours();
  var suffix = (hour < 12) ? "AM" : "PM";
  hour = ((hour + 11) % 12 + 1) + suffix;
  console.log(hour);

  for (i in $scope.times) {
    if ($scope.times[i].time == hour) {
      found = true;
      $scope.times[i].drinks.push(drink);
      break;
    }
  }

  if (!found) {
    $scope.times.push({time: hour, drinks: [drink]});    
  }

  console.log($scope.times)

  /*
  2. Total Intake

  3a. Where you stand by hour

  3b. Where you stand total


  Outputs:

  */

  }
});
