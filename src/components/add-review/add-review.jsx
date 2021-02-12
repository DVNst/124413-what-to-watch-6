import React from 'react';
import {Link} from 'react-router-dom';

// import PropTypes from 'prop-types';
import {MovieTypes} from '../proptypes';

import AddReviewForm from '../add-review-form/add-review-form';

const AddReview = ({movie}) => {
  const {id, name, posterImage} = movie;

  const url = `/films/${id}`;
  // const url = match.url.replace(/\/+$/, ``).replace(/\/review+$/, ``);

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <div className="logo">
            <Link to='/' className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={url} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
            </div>
          </div>
        </header>
        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={name} width={218} height={327} />
        </div>
      </div>
      <AddReviewForm />
    </section>
  );
};

AddReview.propTypes = {
  movie: MovieTypes,
};

export default AddReview;
