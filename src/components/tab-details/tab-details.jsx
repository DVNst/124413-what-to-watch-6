import React, {Fragment} from 'react';

// import PropTypes from 'prop-types';
import {MovieTypes} from '../proptypes';

const TabDetails = ({movie}) => {
  const {name, genre, released, director, starring, runTime} = movie;

  const hours = Math.floor(runTime / 60);
  const minutes = runTime - hours * 60;
  const runTimeFormat = `${hours ? hours + `h` : ``} ${minutes}m`;

  return (
    <div className="movie-card__text movie-card__row">
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
    </div>
  );
};

TabDetails.propTypes = {
  movie: MovieTypes,
};

export default TabDetails;
