import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component.js';

const homeModule = angular.module('home', [
  uiRouter,
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/home/1/');

  $stateProvider
    .state('home', {
      url: '/home/{page:int}/{keyword}',
      params: { page: { value: 1 }, keyword: { value: '' } },
      template: '<home></home>',
    });
})

.component('home', homeComponent)

.name;

export default homeModule;
