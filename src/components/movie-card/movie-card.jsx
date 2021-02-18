import React, {useState, useEffect} from 'react';

import PropTypes from 'prop-types';
import {MovieTypes} from '../proptypes';

import VideoPlayer from '../video-player/video-player';

const MovieCard = ({movie, onMouseOverMovieCard, showVideoPlayer}) => {
  const {id, name, previewImage, previewVideoLink} = movie;
  const url = `/films/${id}`;

  const [videoPlayerVisible, setVideoPlayerVisible] = useState(false);

  useEffect(() => {
    let timerId = null;

    if (showVideoPlayer) {
      timerId = setTimeout(() => (setVideoPlayerVisible(true)), 1000);
    }

    return () => {
      if (timerId !== null) {
        clearTimeout(timerId);
      }
      setVideoPlayerVisible(false);
    };
  }, [showVideoPlayer]);

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={() => onMouseOverMovieCard(id)}
      onMouseOut={() => onMouseOverMovieCard(null)}
    >
      {videoPlayerVisible ?
        <VideoPlayer url={previewVideoLink} poster={previewImage}/>
        :
        <>
          <div className="small-movie-card__image">
            <img src={previewImage} alt={name} width={280} height={175} />
          </div>
          <h3 className="small-movie-card__title">
            <a className="small-movie-card__link" href={url}>{name}</a>
          </h3>
        </>
      }
    </article>
  );
};

MovieCard.propTypes = {
  movie: MovieTypes,
  onMouseOverMovieCard: PropTypes.func.isRequired,
  showVideoPlayer: PropTypes.bool.isRequired,
};

export default MovieCard;
