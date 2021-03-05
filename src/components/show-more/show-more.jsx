import React from 'react';

import PropTypes from 'prop-types';

const ShowMore = ({onClickShowMore}) => {
  return (
    <div className="catalog__more">
      <button
        onClick={onClickShowMore}
        className="catalog__button" type="button"
      >Show more</button>
    </div>
  );
};

ShowMore.propTypes = {
  onClickShowMore: PropTypes.func.isRequired,
};

export default ShowMore;
