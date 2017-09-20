// =========================================================================
// ========================= PetFed Factory =================================
// =========================================================================
app.factory('petfedFactory', function ($http){
  var factory = {};

  var user = {};


  factory.updateFedDog = function(input, callback){
    $http.post('/updateFedDog', input).then(function(output){
      callback(output)
    });
  }

  factory.updateFedCat = function(input, callback){
    $http.post('/updateFedCat', input).then(function(output){
      callback(output)
    });
  }

  factory.updateWalkedDog = function(input, callback){
    $http.post('/updateWalkedDog', input).then(function(output){
      callback(output)
    });
  }




  factory.getStatus = function(callback){
    $http.post('/getStatus').then(function(output){
      callback(output)
    });
  }





  return factory;
}); // End PetFed Factory
