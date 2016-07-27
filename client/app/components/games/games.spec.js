/* eslint-disable */

import GamesModule from './games'
import GamesController from './games.controller';
import GamesComponent from './games.component';
import GamesTemplate from './games.html';

describe('Games', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GamesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GamesController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(GamesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = GamesComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(GamesTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(GamesController);
      });
  });
});
