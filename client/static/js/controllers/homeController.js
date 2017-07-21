// =========================================================================
// ========================= Login Controller ==============================
// =========================================================================
app.controller('homeController', function($scope, factory1, $location){
  $scope.test = 'Hello'

  $scope.regUser = function(){
    console.log('Button Clicked');
  } // End of regUser

});
