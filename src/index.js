import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

const Setting = {
  MOVIE_PROMO_NAME: `The Grand Budapest Hotel`,
  MOVIE_PROMO_GENRE: `Drama`,
  MOVIE_PROMO_RELEASED: 2014,
};

import {movies} from './mocks/movies.js';

ReactDOM.render(
    <App
      moviePromoName={Setting.MOVIE_PROMO_NAME}
      moviePromoGenre={Setting.MOVIE_PROMO_GENRE}
      moviePromoReleased={Setting.MOVIE_PROMO_RELEASED}
      movies={movies}
    />,
    document.querySelector(`#root`)
);
