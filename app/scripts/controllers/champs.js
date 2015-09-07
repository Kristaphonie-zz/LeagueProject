/**
 * Created by Chris on 9/5/2015.
 */
'use strict';

/**
 * @ngdoc function
 * @name leagueProjectApp.controller:champs
 * @description
 * # champCtrl
 * Controller of the leagueProjectApp
 */
angular.module('leagueProjectApp')
  .controller('champCtrl', function ($scope, $state, restService, mainService) {
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
    $scope.championUrls = mainService.buildImgUrl($scope.champions);

    $scope.displayChamp = function (champion) {
      mainService.saveChampImages(champion, $scope.championUrls);
    };
  });
