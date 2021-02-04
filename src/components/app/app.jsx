import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main';

const App = ({moviePromoName, moviePromoGenre, moviePromoReleased, movies}) => {
  return (
    <Main
      moviePromoName={moviePromoName}
      moviePromoGenre={moviePromoGenre}
      moviePromoReleased={moviePromoReleased}
      movies={movies}
    />
  );
};

App.propTypes = {
  moviePromoName: PropTypes.string.isRequired,
  moviePromoGenre: PropTypes.string.isRequired,
  moviePromoReleased: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
export default App;
