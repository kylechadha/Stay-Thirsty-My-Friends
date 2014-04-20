var app = angular.module("Dapp", ["firebase"])
app.controller("DappCtrl", function($scope, $firebase) {

  dappRef = new Firebase("https://drinkmometer.firebaseio.com/");
  $scope.fbRoot = $firebase(dappRef);

  var IDs;
  $scope.fbRoot.$on("loaded", function() {
    $scope.fbRoot.$add( {
      times: [''],
      total: 0
    });
    IDs = $scope.fbRoot.$getIndex();
    $scope.db = $scope.fbRoot.$child(IDs[IDs.length - 1]);
  });

  $scope.options = ["Have another drink!", "Gandhi wouldn't...", "You'sdeffsckked p"];
  $scope.status = $scope.options[0];

  $scope.drinkEvaluator = function(drink) {

    var found = false;
    var hour = new Date().getHours();
    var suffix = (hour < 12) ? "AM" : "PM";
    hour = ((hour + 11) % 12 + 1) + suffix;

    if ($scope.db.times[0] == '') {
      $scope.db.times = [{time: hour, drinks: [drink]}]
    } else {
      for (i in $scope.db.times) {
        if ($scope.db.times[i].time == hour) {
          $scope.db.times[i].drinks.push(drink);
          found = true;
          break;
        }
      }

      if (!found) {
        $scope.db.times.push({time: hour, drinks: [drink]});
      }
    }

    switch(drink)
    {
    case 'b':
      $scope.db.total += 1;
      console.log($scope.db.total);
      break;
    case 'm':
      $scope.db.total += 1.5;
      console.log($scope.db.total);
      break;
    case 's':
      $scope.db.total += 2;
      console.log($scope.db.total);
      break;
    }

    if ($scope.db.total >= 15) {
      $scope.status = $scope.options[2];
    }
    else if ($scope.db.total >= 10) {
      $scope.status = $scope.options[1];
    }

    $scope.db.$save();  
  }


});
