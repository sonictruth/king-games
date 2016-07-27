class GameController {
  constructor($state, $scope, kingService) {
    'ngInject';
    this.$scope = $scope;
    this.$scope.game = kingService.getGameById($state.params.id)[0];
    this.name = 'game';
  }
}

export default GameController;
