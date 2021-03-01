import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';

import App from './components/app/app';

import {films} from './mocks/films.js';

const Setting = {
  MOVIE_PROMO_NAME: `The Grand Budapest Hotel`,
  MOVIE_PROMO_GENRE: `Drama`,
  MOVIE_PROMO_RELEASED: 2014,
};

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App
        moviePromoName={Setting.MOVIE_PROMO_NAME}
        moviePromoGenre={Setting.MOVIE_PROMO_GENRE}
        moviePromoReleased={Setting.MOVIE_PROMO_RELEASED}
        movies={films}
      />
    </Provider>,
    document.querySelector(`#root`)
);
