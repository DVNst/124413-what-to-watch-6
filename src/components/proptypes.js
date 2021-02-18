import PropTypes from 'prop-types';

export const MovieTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
}).isRequired;

export const MoviesTypes = PropTypes.arrayOf(MovieTypes).isRequired;
