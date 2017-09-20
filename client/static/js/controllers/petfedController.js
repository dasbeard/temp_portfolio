// =========================================================================
// ========================= PetFed Controller ==============================
// =========================================================================
app.controller('petfedController', function($scope, petfedFactory, $location, $interval){

  getStatus();

  var storedDate = (new Date).getDate();
  var hourToChangeAtAM = 2;
  var hourToChangeAtPM = 14;


  // timedRefresh();
  timedRefresh();

  // Run the timedRefresh every 30 min.
  $interval(timedRefresh, 1.8e+6);





  $scope.fedDogUpdate = function(){
    if ($scope.dog.status == true){
      $scope.dog.status = false;
    } else {
      $scope.dog.status = true;
    }
    petfedFactory.updateFedDog($scope.dog, function (output){
      getStatus();
    });

  }; // End Fed Dog Update


  $scope.fedCatUpdate = function(){
    if ($scope.cat.status == true){
      $scope.cat.status = false;
    } else {
      $scope.cat.status = true;
    }

    petfedFactory.updateFedCat($scope.cat, function (output){
      getStatus();
    });
  } // End Fed Cat Update


  $scope.walkedDogUpdate = function(){
    if ($scope.walked.status == true){
      $scope.walked.status = false;
    } else {
      $scope.walked.status = true;
    }

    petfedFactory.updateWalkedDog($scope.walked, function (output){
      getStatus();
    });
  } // End Walked Dog Update





  function getStatus(){
    var getTime = new Date();
    var time = getTime.toLocaleTimeString();
    console.log('get status ran at ' + time );
    petfedFactory.getStatus(function(output){
      if (output.data.fedDogStatus == false) {
        $scope.dog = {status: false, content: 'Dog Not Yet Fed', time: 'Not Yet'};
      }
      if (output.data.fedDogStatus == true){
        $scope.dog = {status: true, content: 'Dog Fed at', time: output.data.fedDogTime};
      }
      if (output.data.fedCatStatus == false) {
        $scope.cat = {status: false, content: 'Cat Not Yet Fed', time: 'Not Yet'};
      }
      if (output.data.fedCatStatus == true){
        $scope.cat = {status: true, content: 'Cat Fed at', time: output.data.fedCatTime};
      }
      if (output.data.walkedDogStatus == false) {
        $scope.walked = {status: false, content: 'Dog Not Yet Walked', time: 'Not Yet'};
      }
      if (output.data.walkedDogStatus == true){
        $scope.walked = {status: true, content: 'Dog Walked at', time: output.data.walkedDogTime};
      }
    })

  }; // End Get Status




  // ~~~~~~~~~~~~~~~~~~~~ Functions ~~~~~~~~~~~~~~~~~~~~

  function timedRefresh(){
    var now = new Date();
    var dateString = now.toDateString()
    var nowDate = now.getDate();
    var nowHour = now.getHours();
    $scope.clock = dateString;

    if (hourToChangeAtAM === nowHour || hourToChangeAtPM === nowHour){
      if(storedDate != nowDate){
        storedDate = nowDate;
        getStatus();
      }
    }
  };


});
