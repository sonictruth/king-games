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
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
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
