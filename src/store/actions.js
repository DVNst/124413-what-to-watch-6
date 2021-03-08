export const ActionType = {
  CHANGE_GENRE: `changeGenre`,
  GET_FILMS_BY_GENRE: `getFilmsByGenre`,
  LOAD_FILMS: `loadFilms`,
  LOAD_FILM_PROMO: `loadFilmPromo`,
  LOAD_FILMS_FAVORITE: `loadFilmsFavorite`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilmsByGenre: (genre) => ({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: genre,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),
  loadFilmPromo: (film) => ({
    type: ActionType.LOAD_FILM_PROMO,
    payload: film
  }),
  loadFilmsFavorite: (films) => ({
    type: ActionType.LOAD_FILMS_FAVORITE,
    payload: films
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  })
};
