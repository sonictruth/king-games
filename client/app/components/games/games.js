import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gamesComponent from './games.component';

const gamesModule = angular.module('games', [
  uiRouter,
])

.component('games', gamesComponent)

.name;

export default gamesModule;
