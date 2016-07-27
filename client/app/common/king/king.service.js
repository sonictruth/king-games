import { games } from './games.json';

export default class KingApi {

  constructor() {
    // console.log('API Ready: ', games.length);
    // window.api = this; // FIXME: for debug
    const imgRoot = 'http://royal1.midasplayer.com/images/games/';
    this.games = games.map((game) => Object.assign(game, {
      inCollection: false,
      imgScreen: `${imgRoot}${game.short}/dumps/screen_${game.short}.gif`,
      imgXSmall: `${imgRoot}${game.short}/${game.short}_60x60.gif`,
      imgSmall: `${imgRoot}${game.short}/${game.short}_81x46.gif`,
      img: `${imgRoot}${game.short}_170x80.gif`,
      imgBig: `${imgRoot}${game.short}/tournamentPage/${game.short}_764x260.jpg`,
    }));
  }

  setCollectionToGame(id, inCollection) {
    this.games.map((game) => {
      if (game.short === id) {
        Object.assign(game, { inCollection });
      }
      return game;
    });
  }

  getGameById(id) {
    return this.games.filter((game) => (game.short === id));
  }

  getRandomGames(numberOfGames = 5) {
    // console.log('getRandomGames');
    const rGames = [];
    for (let i = 0; i < numberOfGames; i++) {
      const randomIndex = Math.floor((Math.random() * this.games.length) + 1);
      rGames.push(this.games[randomIndex]);
    }
    return rGames;
  }

  getGames(page = 1, keyword = '', inCollection = false) {
    let prevPage = null;
    let nextPage = null;
    const perPage = 8;
    const offset = (page - 1) * perPage;
    // console.info('Request page', page, 'keyword', keyword,
    //  'inCollection', inCollection, 'offset', offset);
    let cGames = this.games;
    if (inCollection) {
      cGames = cGames.filter((game) => game.inCollection);
    }
    if (keyword && keyword.length > 0) {
      const lowerCaseKeyword = keyword.trim().toLowerCase();
      // console.log('Searching for', lowerCaseKeyword);
      cGames = cGames.filter((game) => (game.name.toLowerCase().indexOf(lowerCaseKeyword) >= 0));
    }
    const pgGames = cGames
                      .filter((game, index) => (index >= offset))
                      .slice(0, perPage);

    const totalPages = Math.ceil(cGames.length / perPage);
    if (totalPages > 1 && page > 1) {
      prevPage = page - 1;
    }
    if (totalPages > 1 && page < totalPages) {
      nextPage = page + 1;
    }
    return {
      nextPage,
      prevPage,
      page,
      perPage,
      totalItems: cGames.length,
      totalPages,
      items: pgGames,
    };
  }

}
