import {ActionType} from './actions';
// import {ganre} from '../const';

import {films} from '../mocks/films';

const getGenre = () => {
  const genre = new Set();
  genre.add(`All genres`);
  films.map((film) => genre.add(film.genre));

  return genre;
};

const initialState = {
  genre: getGenre(),
  filmsByGenre: films,
  films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };

    case ActionType.GET_FILMS:
      return {
        ...state,
        filmsByGenre: action.payload
      };

    default: return state;
  }
};

export {reducer};
