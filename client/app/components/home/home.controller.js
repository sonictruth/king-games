class HomeController {
  constructor(kingService, $scope) {
    'ngInject';
    this.$scope = $scope;
    this.$scope.carouselGames = kingService.getRandomGames();
    this.name = 'home';
  }
}

export default HomeController;
