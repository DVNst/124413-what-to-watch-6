import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

// import PropTypes from 'prop-types';
import {MovieTypes} from '../proptypes';

import Review from '../review/review';
import MovieList from '../movie-list/movie-list';

import {films} from '../../mocks/films';
import {reviews} from '../../mocks/reviews';

import {RatingLevelType, RatingLevelValue} from '../../const';

const Tabs = ({movie}) => {
  const moviesSimilar = films.slice(0, 4);

  const {name, genre, released, posterImage, backgroundImage, rating, scoresCount, description, director, starring, runTime} = movie;
  const ratingLevel = RatingLevelType[Object.keys(RatingLevelValue).find((key) => RatingLevelValue[key] >= rating)];

  // const movieReviews = reviews.filter((review) => review.moviesId === movie.id);

  const hours = Math.floor(runTime / 60);
  const minutes = runTime - hours * 60;
  const runTimeFormat = `${hours ? hours + `h` : ``} ${minutes}m`;

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className="movie-nav__item movie-nav__item--active">
            <Link to={`/films/21`} className="movie-nav__link">Overview</Link>
          </li>
          <li className="movie-nav__item">
            <Link to={`/films/21`} className="movie-nav__link">Details</Link>
          </li>
          <li className="movie-nav__item">
            <Link to={`/films/21`} className="movie-nav__link">Reviews</Link>
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
          {description.split(`\n`).map((paragraph, i) => <p key={`${paragraph}${i}`}>{paragraph.trim()}</p>)}
          <p className="movie-card__director"><strong>Director: {director}</strong></p>
          <p className="movie-card__starring"><strong>Starring: {starring.slice(0, 4).join(`, `)} and other</strong></p>
        </div>
      </>

      {/* Details */}
      {/* <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {starring.map((star, i) => (
                <Fragment key={`${name}${i}`}>
                  {star}
                  {i < starring.length - 1 && <>, <br /></>}
                </Fragment>
              ))}
            </span>
          </p>
        </div>
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{runTimeFormat}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{released}</span>
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
  );
};

Tabs.propTypes = {
  movie: MovieTypes,
};

export default Tabs;
