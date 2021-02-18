import React from 'react';

// import PropTypes from 'prop-types';
import {ReviewsTypes} from '../proptypes';

import Review from '../review/review';

const TabReviews = ({reviews}) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.slice(0, Math.ceil(reviews.length / 2)).map((review) => <Review key={review.id} review={review}/>)}
      </div>
      <div className="movie-card__reviews-col">
        {reviews.slice(Math.ceil(reviews.length / 2)).map((review) => <Review key={review.id} review={review}/>)}
      </div>
    </div>
  );
};

TabReviews.propTypes = {
  reviews: ReviewsTypes,
};

export default TabReviews;
