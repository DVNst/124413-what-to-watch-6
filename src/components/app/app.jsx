import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import PageNotFound from '../page-not-found/page-not-found';

const App = ({moviePromoName, moviePromoGenre, moviePromoReleased, movies}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Main
            moviePromoName={moviePromoName}
            moviePromoGenre={moviePromoGenre}
            moviePromoReleased={moviePromoReleased}
            movies={movies}
          />
        </Route>
        <Route path='/login' exact><SignIn /></Route>
        <Route path='/mylist' exact><MyList /></Route>
        <Route path='/films/:id?' exact component={Film} />
        <Route path='/films/:id/review' exact component={AddReview} />
        <Route path='/player/:id?' exact component={Player} />
        <Route><PageNotFound /></Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  moviePromoName: PropTypes.string.isRequired,
  moviePromoGenre: PropTypes.string.isRequired,
  moviePromoReleased: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
export default App;
