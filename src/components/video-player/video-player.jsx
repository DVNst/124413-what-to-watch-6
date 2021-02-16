import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({url, poster}) => {
  return (
    <video
      className="small-movie-card__image"
      poster={poster}
      src={url}
      muted
      autoPlay
      controls
      width="100%"
      height="100%"
      preload="auto"
    />
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default VideoPlayer;
