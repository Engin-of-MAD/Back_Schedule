'use strict';



angular.module('myApp.form', ['ngRoute', 'ui.mask', `ngMessages`])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Form', {
    templateUrl: 'components/componentForm/componentForm.html',
    controller: 'formCtrl'
  });
}])



.controller('formCtrl', ["$scope", "$http", function($scope, $http) {
  $scope.phone = ""
  $scope.doctors = ['Педиатор', 'Гастроэнтериолог', 'Энедекриолог', 'Психолог']
  $scope.orgs = ['Городская больница №5', 'Артмед', 'Март']
  $scope.sendBtn = ()=>{

    $http({
      method:'GET',
      url: 'http://localhost:3000/index.html#!/Form/send_form',
      params: {
        phone: $scope.phone,
        doctors: $scope.doctors}
    }).then(()=>{
      alert('Запрос отправлен')
    }, ()=>{
      alert('Ошибка')
    })
  }






}])