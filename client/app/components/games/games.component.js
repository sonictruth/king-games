import template from './games.html';
import controller from './games.controller';
import './games.scss';

const gamesComponent = {
  restrict: 'E',
  bindings: {
    inCollection: '<',
  },
  template,
  controller,
};

export default gamesComponent;
