'use strict';

/**
 * @ngdoc function
 * @name leagueProjectApp.controller:home
 * @description
 * # homeCtrl
 * Controller of the leagueProjectApp
 */
angular.module('leagueProjectApp')
  .controller('homeCtrl', function ($scope, $state, restService) {
    $scope.openChamps = function() {
      $state.go('champs');
    };
    $scope.openCalculator = function() {
      $state.go('champCalc');
    };
    $scope.logout = function() {
      $state.go('logout');
    };

    console.log('controlled');

    $scope.getChamps = restService.getChampions();

  });
