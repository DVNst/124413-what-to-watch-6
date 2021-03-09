import React, {useEffect} from 'react';
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

import {fetchFilms, fetchFilmPromo} from '../../store/api-actions';

// const movie1 = {
//   id: 21,
//   name: `The Grand Budapest Hotel`,
//   posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
//   previewImage: `img/the-grand-budapest-hotel-poster.jpg`,
//   backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
//   backgroundColor: `#ffffff`,
//   videoLink: `http://tinyvid.tv/file/2xc1c5ma86rgc.ogg`,
//   previewVideoLink: `http://tinyvid.tv/file/2xc1c5ma86rgc.ogg`,
//   description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.
//   Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
//   rating: 8.9,
//   scoresCount: 240,
//   director: `Wes Andreson`,
//   starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
//   runTime: 99,
//   genre: `Drama`,
//   released: 2014,
//   isFavorite: false
// };

// const route1 = {
//   match: {
//     params: {id: 3},
//     url: `films/3`,
//   },
//   location: {
//     search: ``,
//   }
// };


const App = ({movies, isDataLoaded, onLoadData}) => {
  const getVideoLink = (id) => {
    const movie = movies.find((film) => film.id === Number(id));
    return movie ? movie.videoLink : movies[0].videoLink;
  };

  const getMovie = (id) => {
    const movie = movies.find((film) => film.id === Number(id));
    console.log('----------------getMovie----------------');
    console.log('movies', movies);
    console.log('id', id);
    console.log('movie', movie);
    return movie ? movie : movies[0];
  };

  // componentDidMount() {
  //   console.log(`--------componentWillMount--------`);
  //   onLoadData();
  // }

  useEffect(() => {
    if (!isDataLoaded) {
      console.log(`--------useEffect isDataLoaded--------`);
      onLoadData();
    }
    console.log(`--------useEffect--------`);
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact><Main /></Route>
        <Route path='/login' exact><SignIn /></Route>
        <Route path='/mylist' exact><MyList /></Route>
        <Route path='/films/:id?' exact component={(route) => <Film movie={getMovie(route.match.params.id)} route={route}/>} />
        {/* <Route path='/films/:id?' exact component={() => <Film movie={movies[1]} route={route1}/>} /> */}
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
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFilms());
    dispatch(fetchFilmPromo());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
