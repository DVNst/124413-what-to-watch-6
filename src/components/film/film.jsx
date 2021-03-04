import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import {MovieTypes} from '../proptypes';

import MovieList from '../movie-list/movie-list';
import Tabs from '../tabs/tabs';

import {films} from '../../mocks/films';
import {NUMBER_OF_SIMILAR} from '../../const';

const Film = ({movie, route}) => {
  const {id, name, genre, released, posterImage, backgroundImage} = movie;
  const url = `${route.match.url.replace(/\/+$/, ``)}/review`;
  const moviesSimilar = films.filter((film) => film.genre === genre && film.id !== id).slice(0, NUMBER_OF_SIMILAR);

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
            <Tabs movie={movie} route={route}/>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__movies-list">
            <MovieList movies={moviesSimilar} />
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
  route: PropTypes.object,
  movie: MovieTypes,
};

export default Film;
