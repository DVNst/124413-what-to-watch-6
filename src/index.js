import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

import {films} from './mocks/films.js';

const Setting = {
  MOVIE_PROMO_NAME: `The Grand Budapest Hotel`,
  MOVIE_PROMO_GENRE: `Drama`,
  MOVIE_PROMO_RELEASED: 2014,
};

ReactDOM.render(
    <App
      moviePromoName={Setting.MOVIE_PROMO_NAME}
      moviePromoGenre={Setting.MOVIE_PROMO_GENRE}
      moviePromoReleased={Setting.MOVIE_PROMO_RELEASED}
      movies={films}
    />,
    document.querySelector(`#root`)
);
