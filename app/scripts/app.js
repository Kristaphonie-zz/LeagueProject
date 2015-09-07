'use strict';

/**
 * @ngdoc overview
 * @name leagueProjectApp
 * @description
 * # leagueProjectApp
 *
 * Main module of the application.
 */
var app = angular
  .module('leagueProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'homeCtrl',
        change: function(mainService) {
          mainService.changeLogoAndGoToChamps();
        }
      }).state('champs', {
        url: '/champions',
        templateUrl: 'views/champions.html',
        controller: 'champCtrl'
      }).state('champCalc', {
        url: '/champion_calculator',
        templateUrl: 'views/championCalc.html',
        controller: 'champCalcCtrl'
      }).state('chosenChamp', {
        url: '/:champ',
        templateUrl: 'views/chosenChamp.html',
        controller: 'chosenChamp'
      });
  });
