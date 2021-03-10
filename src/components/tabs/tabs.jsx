import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import {MovieTypes, ReviewsTypes} from '../proptypes';

import TabOverview from '../tab-overview/tab-overview';
import TabDetails from '../tab-details/tab-details';
import TabReviews from '../tab-reviews/tab-reviews';

const Tabs = ({movie, route, reviews: movieReviews}) => {
  const searchFilter = new URLSearchParams(route.location.search).get(`tab`);
  const [activeTab, setActiveTab] = useState(searchFilter || `Overview`);

  const handleClickNav = (evt) => {
    evt.preventDefault();
    setActiveTab(evt.target.innerHTML);
  };

  const getTab = (tab) => {
    switch (tab) {
      case `Overview`:
        return <TabOverview movie={movie}/>;
      case `Details`:
        return <TabDetails movie={movie}/>;
      case `Reviews`:
        return <TabReviews reviews={movieReviews}/>;
      default:
        return <TabOverview movie={movie}/>;
    }
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list" onClick={handleClickNav}>
          <li className={`movie-nav__item ${activeTab === `Overview` ? `movie-nav__item--active` : ``}`}>
            <Link to={`${route.match.url}?tab=Overview`} className="movie-nav__link">Overview</Link>
          </li>
          <li className={`movie-nav__item ${activeTab === `Details` ? `movie-nav__item--active` : ``}`}>
            <Link to={`${route.match.url}?tab=Details`} className="movie-nav__link">Details</Link>
          </li>
          <li className={`movie-nav__item ${activeTab === `Reviews` ? `movie-nav__item--active` : ``}`}>
            <Link to={`${route.match.url}?tab=Reviews`} className="movie-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>

      {getTab(activeTab)}
    </div>
  );
};

Tabs.propTypes = {
  movie: MovieTypes,
  route: PropTypes.object,
  reviews: ReviewsTypes,
};

export default Tabs;
