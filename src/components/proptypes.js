import PropTypes from 'prop-types';

export const MovieTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
}).isRequired;

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

export const MoviesTypes = PropTypes.arrayOf(MovieTypes).isRequired;
