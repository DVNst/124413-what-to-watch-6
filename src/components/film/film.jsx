import React from 'react';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import {MovieTypes} from '../proptypes';

import Review from '../review/review';
import MovieList from '../movie-list/movie-list';

import {films} from '../../mocks/films';
import {reviews} from '../../mocks/reviews';

import {RatingLevelType, RatingLevelValue} from '../../const';

const Film = ({movie, match}) => {
  const moviesSimilar = films.slice(0, 4);

  const {name, genre, released, posterImage, backgroundImage, rating, scoresCount, description, director, starring} = movie;
  const url = `${match.url.replace(/\/+$/, ``)}/review`; // remove trailing slash
  const ratingLevel = RatingLevelType[Object.keys(RatingLevelValue).find((key) => RatingLevelValue[key] >= rating)];

  const movieReviews = reviews.filter((review) => review.moviesId === movie.id);

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
            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <Link to={`${match.url}`} className="movie-nav__link">Overview</Link>
                  </li>
                  <li className="movie-nav__item">
                    <Link to={`${match.url}`} className="movie-nav__link">Details</Link>
                  </li>
                  <li className="movie-nav__item">
                    <Link to={`${match.url}`} className="movie-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>

              {/* Overview */}
              <>
                <div className="movie-rating">
                  <div className="movie-rating__score">{String(rating).replace(`.`, `,`)}</div>
                  <p className="movie-rating__meta">
                    <span className="movie-rating__level">{ratingLevel}</span>
                    <span className="movie-rating__count">{scoresCount} ratings</span>
                  </p>
                </div>
                <div className="movie-card__text">
                  {description.split(`\n`).map((paragraph, i) => <p key={i}>{paragraph.trim()}</p>)}
                  <p className="movie-card__director"><strong>Director: {director}</strong></p>
                  <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and other</strong></p>
                </div>
              </>

              {/* Details */}
              {/* <div className="movie-card__text movie-card__row">
                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Director</strong>
                    <span className="movie-card__details-value">Wes Andreson</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Starring</strong>
                    <span className="movie-card__details-value">
                      Bill Murray, <br />
                      Edward Norton, <br />
                      Jude Law, <br />
                      Willem Dafoe, <br />
                      Saoirse Ronan, <br />
                      Tony Revoloru, <br />
                      Tilda Swinton, <br />
                      Tom Wilkinson, <br />
                      Owen Wilkinson, <br />
                      Adrien Brody, <br />
                      Ralph Fiennes, <br />
                      Jeff Goldblum
                    </span>
                  </p>
                </div>
                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Run Time</strong>
                    <span className="movie-card__details-value">1h 39m</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Genre</strong>
                    <span className="movie-card__details-value">Comedy</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Released</strong>
                    <span className="movie-card__details-value">2014</span>
                  </p>
                </div>
              </div> */}

              {/* Reviews */}
              {/* <div className="movie-card__reviews movie-card__row">
                <div className="movie-card__reviews-col">
                  {movieReviews.slice(0, Math.ceil(movieReviews.length / 2)).map((review) => <Review key={review.id} review={review}/>)}
                </div>
                <div className="movie-card__reviews-col">
                  {movieReviews.slice(Math.ceil(movieReviews.length / 2)).map((review) => <Review key={review.id} review={review}/>)}
                </div>
              </div> */}
            </div>
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
  match: PropTypes.object,
  movie: MovieTypes,
};

export default Film;
