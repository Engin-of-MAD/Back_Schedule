'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.form',
  'myApp.schdl'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/componentForm'});
}]);
