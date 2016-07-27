class GamesController {
  constructor($state, kingService, $scope) {
    'ngInject';

    this.page = $state.params.page;
    this.keyword = $state.params.keyword;
    this.$scope = $scope;
    this.$scope.keyword = $state.params.keyword;
    this.$scope.$watch('keyword', (keyword) => {
      if (this.keyword !== keyword) {
        $state.go($state.current.name, { keyword, page: 1 });
      }
    });
    this.$scope.games = kingService.getGames(this.page, this.keyword, this.inCollection);
    this.name = 'games';
  }
}

export default GamesController;
