/**
 * Created by Chris on 9/5/2015.
 */
'use strict';

angular.module('leagueProjectApp')
  .service('mainService', function($state) {
    var chosenChamp = '';
    var champUrls = [];
    this.changeLogoAndGoToChamps = function() {
      $('.home-bar-text').attr('data-text-position', 'left');
      $('.league-image').attr('data-change-logo', 'yes');
    };

    this.buildImgUrl = function(champions) {

      for (var key in champions) {
        //for (var spellsKey in champions[key].spells[i]) {
        console.log(key);
        champUrls.push({
          url: 'http://ddragon.leagueoflegends.com/cdn/4.4.3/img/champion/' + key + '.png',
          champ: key.toString(),
          spellUrlQ: 'http://ddragon.leagueoflegends.com/cdn/4.4.3/img/spell/' + champions[key].spells[0].image.full,
          spellUrlW: 'http://ddragon.leagueoflegends.com/cdn/4.4.3/img/spell/' + champions[key].spells[1].image.full,
          spellUrlE: 'http://ddragon.leagueoflegends.com/cdn/4.4.3/img/spell/' + champions[key].spells[2].image.full,
          spellUrlR: 'http://ddragon.leagueoflegends.com/cdn/4.4.3/img/spell/' + champions[key].spells[3].image.full
        });
      }

      champUrls.sort(function(a, b){
        if(a.champ < b.champ) return -1;
        if(a.champ > b.champ) return 1;
        return 0;
      });
      console.log(champUrls);

      return champUrls;
    };

    this.saveChampImages = function(champ) {
      chosenChamp = champ;
      $state.go('chosenChamp', {champ: champ});
    };

    this.getChosenChampion = function() {
      return chosenChamp;
    }
  });
