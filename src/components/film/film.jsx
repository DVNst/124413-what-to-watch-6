import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import MovieCard from '../movie-card/movie-card';

import {movies} from '../../mocks/movies';
import {moviesSimilar} from '../../mocks/movies-similar';
import {movieMocks} from '../../mocks/movie-mocks';

const Film = (props) => {
  const {genre, released, poster_image: posterImage, background_image: backgroundImage, rating, scores_count: scoresCount, description, director, starring} = movieMocks;

  const {match, location} = props;

  const {params: {id}} = match;
  const movie = movies.find((film) => film.id === Number(id));
  const name = movie ? movie.name : `${movieMocks.name} ${id}`;

  return (
    <>
      <section className="movie-card movie-card--full">
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
              <h2 className="movie-card__Name">{name}</h2>
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
                <Link to={`${location.pathname}/review`} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width={218} height={327} />
            </div>
            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <Link to={`${location.pathname}`} className="movie-nav__link">Overview</Link>
                  </li>
                  <li className="movie-nav__item">
                    <Link to={`${location.pathname}`} className="movie-nav__link">Details</Link>
                  </li>
                  <li className="movie-nav__item">
                    <Link to={`${location.pathname}`} className="movie-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>
              <div className="movie-rating">
                <div className="movie-rating__score">{rating}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">Very good</span>
                  <span className="movie-rating__count">{scoresCount} ratings</span>
                </p>
              </div>
              <div className="movie-card__text">
                <p>{description}</p>
                <p>Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>
                <p className="movie-card__director"><strong>Director: {director}</strong></p>
                <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__movies-list">
            {moviesSimilar.map((movieSimilar) => (
              <MovieCard
                key={movieSimilar.id}
                movie={movieSimilar}
              />
            ))}
          </div>
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

Film.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  // movie: PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   posterImage: PropTypes.string.isRequired,
  //   backgroundImage: PropTypes.string.isRequired,
  //   rating: PropTypes.number.isRequired,
  //   scoresCount: PropTypes.number.isRequired,
  //   description: PropTypes.string.isRequired,
  //   director: PropTypes.string.isRequired,
  //   starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  //   genre: PropTypes.string.isRequired,
  //   released: PropTypes.number.isRequired,
  // }).isRequired,
};

export default Film;