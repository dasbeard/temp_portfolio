// =========================================================================
// =========================== Wall Controller =============================
// =========================================================================
app.controller('resumeController', function($scope, $location, $http){
  // console.log('in partial 2 Controller');
  $scope.user = {};
  $scope.messages = [];

  $scope.addNewMessage = function(){
    console.log('========== From addNewMessage =========');
  } // End of Add New Message

}); //End of Wall Controller
