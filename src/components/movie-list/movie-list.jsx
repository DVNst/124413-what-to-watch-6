import React, {useState} from 'react';

import {MoviesTypes} from '../proptypes';

import MovieCard from '../movie-card/movie-card';

const MovieList = ({movies}) => {
  const [movieActive, setMovieActive] = useState(null);

  const handleMouseOverMovieCard = (id) => {
    setMovieActive(id);
  };

  return (
    <>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMouseOverMovieCard={handleMouseOverMovieCard}
          showVideoPlayer={movieActive === movie.id}
        />
      ))}
    </>
  );
};

MovieList.propTypes = {
  movies: MoviesTypes,
};

export default MovieList;
