//==================== Creating Angular App ====================
var app = angular.module('myApp', ['ngRoute']);

//==================== Angular Routes ====================

  app.config(function($routeProvider, $locationProvider){

    $routeProvider
      .when('/Home', {
        templateUrl: 'static/partials/Home.html',
        controller: 'homeController'
      })
      .when('/resume', {
        templateUrl: 'static/partials/resume.html',
        controller: 'resumeController'
      })
      .when('/Resume', {
        templateUrl: 'static/partials/resume.html',
        controller: 'resumeController'
      })
      .when('/petfed', {
        templateUrl: 'static/partials/petfed.html',
        controller: 'petfedController'
      })
      .otherwise({
        redirectTo: '/Home'
      })
      // $locationProvider.html5Mode(true);
      // $locationProvider.hashPrefix('!');

    });
