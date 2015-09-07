/**
 * Created by Chris on 9/5/2015.
 */
'use strict';

angular.module('leagueProjectApp')
  .service('restService', function($http) {
    var champObject = [];

    this.getChampions = function() {
      console.log('Getting Champion List');
      $http.get('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=all&api_key=cdceab9f-30f7-4aed-bbac-0c2d82b3b616')
        .then(function(response) {
          console.log(response);
          champObject.push(response.data.data);
          console.log(champObject);
        });
    };

    this.returnChampions = function() {
      console.log(champObject[0]);
      return champObject[0];
    };
  });
