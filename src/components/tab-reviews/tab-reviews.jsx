import React from 'react';

import {ReviewsTypes} from '../proptypes';

import Review from '../review/review';

const TabReviews = ({reviews}) => {
  const reviewsHalf = Math.ceil(reviews.length / 2);
  const reviewsLeft = reviews.slice(0, reviewsHalf);
  const reviewsRight = reviews.slice(reviewsHalf);

  const getReviews = (items) => items.map((review) => <Review key={review.id} review={review}/>);

  return (
    <div className="movie-card__reviews movie-card__row">
      {reviews.length > 0 ?
        <>
          <div className="movie-card__reviews-col">
            {getReviews(reviewsLeft)}
          </div>
          <div className="movie-card__reviews-col">
            {getReviews(reviewsRight)}
          </div>
        </>
        :
        <p>No reviews</p>
      }
    </div>
  );
};

TabReviews.propTypes = {
  reviews: ReviewsTypes,
};

export default TabReviews;
