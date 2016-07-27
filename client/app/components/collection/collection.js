import angular from 'angular';
import uiRouter from 'angular-ui-router';
import collectionComponent from './collection.component';

const collectionModule = angular.module('collection', [
  uiRouter,
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('collection', {
      url: '/collection/{page:int}/{keyword}',
      params: { page: { value: 1 }, keyword: { value: '' } },
      template: '<collection></collection>',
    });
})

.component('collection', collectionComponent)

.name;

export default collectionModule;
