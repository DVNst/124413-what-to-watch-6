import React from 'react';

import {ReviewTypes} from '../proptypes';

const Review = ({review}) => {
  const {rating, comment, user, date} = review;

  const dateReview = new Date(date).toLocaleString(`eng`, {year: `numeric`, month: `long`, day: `numeric`});

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{dateReview}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{String(rating.toFixed(1)).replace(`.`, `,`)}</div>
    </div>
  );
};

Review.propTypes = {
  review: ReviewTypes,
};

export default Review;
