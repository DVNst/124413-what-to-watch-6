import {ActionType} from './actions';

import {ALL_GENRES, NUMBER_IN_GENRES} from '../const';

import {films} from '../mocks/films';

const getGenres = () => {
  const _genres = new Map();
  films.map((film) => _genres.set(
      film.genre,
      _genres.get(film.genre) ? _genres.get(film.genre) + 1 : 1)
  );

  const genres = Array.from(_genres).sort((a, b) => b[1] - a[1]).map((genre) => genre[0]).slice(0, NUMBER_IN_GENRES).sort();

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
