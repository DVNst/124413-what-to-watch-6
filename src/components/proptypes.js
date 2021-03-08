import PropTypes from 'prop-types';

export const MovieTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
}).isRequired;

export const MoviePromoTypes = PropTypes.shape({
  name: PropTypes.string,
  genre: PropTypes.string,
  released: PropTypes.number,
  posterImage: PropTypes.string,
  backgroundImage: PropTypes.string,
}).isRequired;

export const MoviesTypes = PropTypes.arrayOf(MovieTypes);

export const ReviewTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  moviesId: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}).isRequired;

export const ReviewsTypes = PropTypes.arrayOf(ReviewTypes).isRequired;
