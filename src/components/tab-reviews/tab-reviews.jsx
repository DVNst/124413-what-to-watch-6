import React from 'react';

// import PropTypes from 'prop-types';
import {ReviewsTypes} from '../proptypes';

import Review from '../review/review';

const TabReviews = ({reviews}) => {
  const reviewsHalf = Math.ceil(reviews.length / 2);
  const reviewsLeft = reviews.slice(0, reviewsHalf);
  const reviewsRight = reviews.slice(reviewsHalf);

  const getReviews = (items) => items.map((review) => <Review key={review.id} review={review}/>);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {getReviews(reviewsLeft)}
      </div>
      <div className="movie-card__reviews-col">
        {getReviews(reviewsRight)}
      </div>
    </div>
  );
};

TabReviews.propTypes = {
  reviews: ReviewsTypes,
};

export default TabReviews;
