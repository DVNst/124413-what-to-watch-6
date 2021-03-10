import React, {Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import {MovieTypes, ReviewsTypes, MoviesTypes} from '../proptypes';

import MovieList from '../movie-list/movie-list';
import Tabs from '../tabs/tabs';
import LoadingScreen from '../loading-screen/loading-screen';

// import {films} from '../../mocks/films';
// import {fetchFilm, fetchComments, fetchFilms} from '../../store/api-actions';
import {NUMBER_OF_SIMILAR} from '../../const';

// const Film = ({movie, route, onLoadData, reviews, movies, isDataLoaded}) => {
const Film = ({movie, route, reviews, movies, isDataLoaded}) => {
  console.log('------------------props------------------');
  console.log('movie', movie);
  console.log('route', route);
  console.log('reviews', reviews);
  console.log('movies', movies);
  console.log('isDataLoaded', isDataLoaded);

  const {name, genre, released, poster_image: posterImage, background_image: backgroundImage, background_color: backgroundColor} = movie;
  // const {name, genre, released, poster_image: posterImage, background_image: backgroundImage} = movie ? movie : [`noname`, `nogenre`, 1111, ``, ``];

  const id = route ? +route.match.params.id : false;
  const url = `${route.match.url.replace(/\/+$/, ``)}/review`;
  const moviesSimilar = movies.filter((film) => film.genre === genre && film.id !== id).slice(0, NUMBER_OF_SIMILAR);

  // useEffect(() => {
  //   if (movie.id !== id || !isDataLoaded) {
  //     onLoadData(id);
  //   }
  // });

  return (
    <>
      <section className="movie-card movie-card--full" style={{backgroundColor: `${backgroundColor}`}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to='/' className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>
            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
              </div>
            </div>
          </header>
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>
              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={url} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width={218} height={327} />
            </div>
            {/* {movie && reviews && <Tabs movie={movie} route={route} reviews={reviews}/>} */}
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {isDataLoaded
            ? <MovieList movies={moviesSimilar} />
            : <LoadingScreen />
          }
        </section>
        <footer className="page-footer">
          <div className="logo">
            <Link to='/' className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

Film.defaultProps = {
  movie: {
    name: ``,
    genre: ``,
    released: ``,
    poster_image: ``,
    background_image: ``,
    background_color: ``,
  },
};

Film.propTypes = {
  route: PropTypes.object,
  // movie: MovieTypes,
  // onLoadData: PropTypes.func.isRequired,
  // reviews: ReviewsTypes,
  movies: MoviesTypes,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  // movie: state.movieActive,
  reviews: state.movieActiveComments,
  movies: state.movies,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  // onLoadData(id) {
  //   dispatch(fetchFilm(id));
  //   dispatch(fetchComments(id));
  //   dispatch(fetchFilms());
  // },
});

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
