var app = angular.module("Dapp", [])
app.controller("DappCtrl", function($scope) {
  $scope.options = ["Have another drink!", "Gandhi wouldn't...", "You'sdeffsckked p"];
  $scope.status = $scope.options[0];
  $scope.total = 0;
  $scope.times = [{time: "12PM", drinks:["s", "b"]}, {time: "1PM", drinks:["b", "m", "s"]}, {time: "2PM", drinks:["m"]}];

  $scope.drinkEvaluator = function(drink) {

    var found = false;
    var hour = new Date().getHours();
    var suffix = (hour < 12) ? "AM" : "PM";
    hour = ((hour + 11) % 12 + 1) + suffix;

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

    switch(drink)
    {
    case 'b':
      $scope.total += 1;
      console.log($scope.total);
      break;
    case 'm':
      $scope.total += 1.5;
      console.log($scope.total);
      break;
    case 's':
      $scope.total += 2;
      console.log($scope.total);
      break;
    }

    if ($scope.total >= 10) {
      $scope.status = $scope.options[2];
    }
    else if ($scope.total >= 5) {
      $scope.status = $scope.options[1];
    }
  }


});
