/* eslint-disable */

import GameModule from './game'
import GameController from './game.controller';
import GameComponent from './game.component';
import GameTemplate from './game.html';

describe('Game', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GameModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GameController();
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
      let component = GameComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(GameTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(GameController);
      });
  });
});
