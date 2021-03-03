import {ActionType} from './actions';

import {ALL_GENRES} from '../const';

import {films} from '../mocks/films';

const getGenres = () => {
  const genres = new Set();
  films.map((film) => genres.add(film.genre));

  return [ALL_GENRES, ...Array.from(genres).sort()];
};

const getFilmsByGenre = (genre) => ((genre !== ALL_GENRES) ? films.filter((film) => film.genre === genre) : films);

const initialState = {
  movies: films,
  moviesByGenre: films,
  genres: getGenres(),
  genreActive: ALL_GENRES,
  moviePromo: films[20],
  moviesFavorites: films.slice(0, 8),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genreActive: action.payload
      };

    case ActionType.GET_FILMS_BY_GENRE:
      return {
        ...state,
        moviesByGenre: getFilmsByGenre(action.payload)
      };

    default: return state;
  }
};

export {reducer};
