import React from 'react';

import {MovieTypes} from '../proptypes';

import {RatingLevelType, RatingLevelValue} from '../../const';

const TabOverview = ({movie}) => {
  const {rating, scoresCount, description, director, starring} = movie;
  const ratingLevel = RatingLevelType[Object.keys(RatingLevelValue).find((key) => RatingLevelValue[key] >= rating)];

  return (
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
  );
};

TabOverview.propTypes = {
  movie: MovieTypes,
};

export default TabOverview;
