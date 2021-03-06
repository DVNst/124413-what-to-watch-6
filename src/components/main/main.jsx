import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {MoviePromoTypes} from '../proptypes';

import {fetchFilmPromo} from '../../store/api-actions';

import Catalog from '../catalog/catalog';

const Main = ({moviePromo, onLoadPromo}) => {
  const {background_image: backgroundImage, poster_image: posterImage} = moviePromo;
  useEffect(() => {
    onLoadPromo();
  }, []);

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={moviePromo.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header movie-card__head">
          <div className="logo">
            <Link to='/' className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
            </div>
          </div>
        </header>
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={posterImage} alt={moviePromo.name} width={218} height={327} />
            </div>
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{moviePromo.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{moviePromo.genre}</span>
                <span className="movie-card__year">{moviePromo.released}</span>
              </p>
              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <Catalog />
        <footer className="page-footer">
          <div className="logo">
            <Link to='/' className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

Main.propTypes = {
  moviePromo: MoviePromoTypes,
  onLoadPromo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  moviePromo: state.moviePromo,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadPromo() {
    dispatch(fetchFilmPromo());
  },
});


export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
