import angular from 'angular';
import Home from './home/home.js';
import Game from './game/game.js';
import Collection from './collection/collection.js';

const componentModule = angular.module('app.components', [
  Home,
  Game,
  Collection,
])
.name;

export default componentModule;
