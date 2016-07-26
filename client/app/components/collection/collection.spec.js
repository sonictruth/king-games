/* eslint-disable */

import CollectionModule from './collection'
import CollectionController from './collection.controller';
import CollectionComponent from './collection.component';
import CollectionTemplate from './collection.html';

describe('Collection', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CollectionModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CollectionController();
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
      expect(CollectionTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CollectionComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CollectionTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CollectionController);
      });
  });
});
