import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import PropTypes from 'prop-types';
import {MoviesTypes} from '../proptypes';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import PageNotFound from '../page-not-found/page-not-found';

const App = ({moviePromoName, moviePromoGenre, moviePromoReleased, movies}) => {
  const getVideoLink = (id) => {
    const movie = movies.find((film) => film.id === Number(id));
    return movie ? movie.videoLink : movies[0].videoLink;
  };

  const getMovie = (id) => {
    const movie = movies.find((film) => film.id === Number(id));
    return movie ? movie : movies[0];
  };

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
        <Route path='/mylist' exact><MyList movies={movies.slice(0, 8)}/></Route>
        <Route path='/films/:id?' exact component={(route) => <Film movie={getMovie(route.match.params.id)} match={route.match}/>} />
        <Route path='/films/:id/review' exact component={(route) => <AddReview movie={getMovie(route.match.params.id)} />} />
        <Route path='/player/:id?' exact component={(route) => <Player videoLink={getVideoLink(route.match.params.id)} />} />
        <Route><PageNotFound /></Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  moviePromoName: PropTypes.string.isRequired,
  moviePromoGenre: PropTypes.string.isRequired,
  moviePromoReleased: PropTypes.number.isRequired,
  movies: MoviesTypes,
};
export default App;
