import React, {useState, useEffect} from 'react';

import PropTypes from 'prop-types';
import {MovieTypes} from '../proptypes';

import VideoPlayer from '../video-player/video-player';

const MovieCard = ({movie, onMouseOverMovieCard, movieActive}) => {
  const {id, name, previewImage, previewVideoLink} = movie;
  const url = `/films/${id}`;

  const [videoPlayerVisible, setVideoPlayerVisible] = useState(false);

  useEffect(() => {
    let timerId = null;

    if (movieActive === id) {
      timerId = setTimeout(() => (setVideoPlayerVisible(true)), 1000);
    }

    return () => {
      if (timerId !== null) {
        clearTimeout(timerId);
      }
      setVideoPlayerVisible(false);
    };
  }, [movieActive]);

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={() => onMouseOverMovieCard(id)}
      onMouseOut={() => onMouseOverMovieCard(null)}
    >
      {videoPlayerVisible && <VideoPlayer url={previewVideoLink} poster={previewImage}/>}
      {!videoPlayerVisible && <>
        <div className="small-movie-card__image">
          <img src={previewImage} alt={name} width={280} height={175} />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href={url}>{name}</a>
        </h3>
      </>}
    </article>
  );
};

MovieCard.propTypes = {
  movie: MovieTypes,
  onMouseOverMovieCard: PropTypes.func.isRequired,
  movieActive: PropTypes.number
};

export default MovieCard;
