import {ActionType} from './actions';

import {ALL_GENRES, NUMBER_IN_GENRES, AuthorizationStatus} from '../const';

const getGenres = (films) => {
  const _genres = new Map();
  films.map((film) => _genres.set(
      film.genre,
      _genres.get(film.genre) ? _genres.get(film.genre) + 1 : 1)
  );

  const genres = Array.from(_genres).sort((a, b) => b[1] - a[1]).map((genre) => genre[0]).slice(0, NUMBER_IN_GENRES).sort();

  return [ALL_GENRES, ...Array.from(genres).sort()];
};

const getFilmsByGenre = (genre, films) => ((genre !== ALL_GENRES) ? films.filter((film) => film.genre === genre) : films);

const initialState = {
  movies: [],
  moviesByGenre: [],
  movieActive: {},
  movieActiveComments: [],
  genres: [ALL_GENRES],
  genreActive: ALL_GENRES,
  moviePromo: {},
  moviesFavorites: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
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
        moviesByGenre: getFilmsByGenre(action.payload, state.movies)
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        movies: action.payload,
        moviesByGenre: action.payload,
        genres: getGenres(action.payload),
        isDataLoaded: true
      };
    case ActionType.LOAD_FILM_PROMO:
      return {
        ...state,
        moviePromo: action.payload,
      };
    case ActionType.LOAD_FILMS_FAVORITE:
      return {
        ...state,
        moviesFavorites: action.payload,
      };
    case ActionType.LOAD_FILM:
      return {
        ...state,
        movieActive: action.payload,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        movieActiveComments: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    default: return state;
  }
};

export {reducer};
