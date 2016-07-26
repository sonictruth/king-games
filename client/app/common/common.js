import angular from 'angular';
import Navbar from './navbar/navbar.js';
import Loader from './loader/loader.js';
import kingService from './king/king.service.js';

const commonModule = angular.module('app.common', [
  Navbar,
  Loader,
]).service({
  kingService,
})

.name;

export default commonModule;
