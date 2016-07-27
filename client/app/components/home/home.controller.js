import jQuery from 'jquery';

class HomeController {
  constructor(kingService, $scope) {
    'ngInject';
    this.$scope = $scope;
    this.$scope.carouselGames = kingService.getRandomGames();
    this.$scope.$evalAsync(() => {
      jQuery('.carousel').carousel({ interval: 3000 });
    });
    this.name = 'home';
  }
}

export default HomeController;
