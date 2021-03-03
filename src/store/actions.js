export const ActionType = {
  CHANGE_GENRE: `changeGenre`,
  GET_FILMS_BY_GENRE: `getFilmsByGenre`,
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
};
