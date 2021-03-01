export const ActionType = {
  CHANGE_GENRE: `changeGenre`,
  GET_FILMS: `getFilms`,
};

const getFilmsByGenre = (films, genre) => {
  return (genre !== `All genres`) ? films.filter((film) => film.genre === genre) : films;
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilms: (films, genre) => ({
    type: ActionType.GET_FILMS,
    payload: getFilmsByGenre(films, genre),
  }),
};
