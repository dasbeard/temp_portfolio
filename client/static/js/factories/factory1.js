// =========================================================================
// ========================= Login Factory =================================
// =========================================================================
app.factory('factory1', function ($http){
  var factory = {};

  var user = {};

  //Register method
  factory.register = function(input, callback){
    $http.post('/reg', input).then(function(output){
      console.log('Made it back from factory');
      callback(output);
    });
  }

  //User Object Setter
  factory.setUser = function(data, callback){
    user = data;
    callback();
  }

  //User Object Getter
  factory.getUser = function(callback){
    callback(user);
  }


  return factory;
}); // End Login Factory


// =========================================================================
// ========================= Wall Factory ===============================
// =========================================================================
app.factory('wallFactory', function($http){
  var factory = {};

factory.getAllMessages = function(callback){
  $http.get('/messages/all').then(function(output){
    console.log('Got all Messages');
    callback(output.data);
  });
}

factory.addComment = function(input, callback){
  $http.post('/comments/new', input).then(function(output){
    console.log('Added new Comment');
    callback(output.data);
  });
}


return factory;

}); // End Message Factory
