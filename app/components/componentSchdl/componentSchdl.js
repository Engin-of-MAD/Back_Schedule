'use strict';

angular.module('myApp.schdl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Schdl', {
    templateUrl: 'components/componentSchdl/componentSchdl.html'
  });
}])

