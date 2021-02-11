import React from 'react';

import PropTypes from 'prop-types';
import {MovieTypes} from '../proptypes';

const MovieCard = ({movie, onMouseOverMovieCard}) => {
  const {id, name, previewImage} = movie;
  const url = `/films/${id}`;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={() => onMouseOverMovieCard && onMouseOverMovieCard(id)}
      onMouseOut={() => onMouseOverMovieCard && onMouseOverMovieCard(null)}
    >
      <div className="small-movie-card__image">
        <img src={previewImage} alt={name} width={280} height={175} />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={url}>{name}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: MovieTypes,
  onMouseOverMovieCard: PropTypes.func,
};

export default MovieCard;
