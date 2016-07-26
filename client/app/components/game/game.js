import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gameComponent from './game.component';

const gameModule = angular.module('game', [
  uiRouter,
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('game', {
      url: '/game/:id',
      template: '<game></game>',
    });
})

.component('game', gameComponent)

.name;

export default gameModule;
