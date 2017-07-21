// =========================================================================
// =========================== Wall Controller =============================
// =========================================================================
app.controller('navBarController', function($scope, $location){
  $scope.user = {};
  $scope.messages = [];

  $scope.addNewMessage = function(){
    console.log('========== From addNewMessage =========');
  } // End of Add New Message

}); //End of Wall Controller
