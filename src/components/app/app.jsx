import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {MoviesTypes} from '../proptypes';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import PageNotFound from '../page-not-found/page-not-found';

const App = ({movies}) => {
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
        <Route path='/' exact><Main /></Route>
        <Route path='/login' exact><SignIn /></Route>
        <Route path='/mylist' exact><MyList /></Route>
        <Route path='/films/:id?' exact component={(route) => <Film movie={getMovie(route.match.params.id)} route={route}/>} />
        <Route path='/films/:id/review' exact component={(route) => <AddReview movie={getMovie(route.match.params.id)} />} />
        <Route path='/player/:id?' exact component={(route) => <Player videoLink={getVideoLink(route.match.params.id)} />} />
        <Route><PageNotFound /></Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movies: MoviesTypes,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export {App};
export default connect(mapStateToProps)(App);
