/**
 * Created by Chris on 9/5/2015.
 */
'use strict';

/**
 * @ngdoc function
 * @name leagueProjectApp.controller:chosenChamp
 * @description
 * # chosenChamp
 * Controller of the leagueProjectApp
 */
angular.module('leagueProjectApp')
  .controller('chosenChamp', function ($scope, $state, restService, mainService, $timeout) {
    $scope.openChamps = function () {
      $state.go('champs');
    };
    $scope.openCalculator = function () {
      $state.go('champCalc');
    };
    $scope.logout = function () {
      $state.go('logout');
    };

    $scope.champions = restService.returnChampions();
    $scope.champ = mainService.getChosenChampion($scope.champions);
  });
