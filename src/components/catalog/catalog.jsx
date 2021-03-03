import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import {MoviesTypes} from '../proptypes';
import {ActionCreator} from '../../store/actions';

import MovieList from '../movie-list/movie-list';

import {NUMBER_IN_SHOW} from '../../const';

const Catalog = ({moviesByGenre, genres, genreActive, handleClickGenre}) => {
  const getMoviesShow = (qty) => {
    return moviesByGenre.slice(0, qty);
  };

  const [moviesShow, setMoviesShow] = useState(getMoviesShow(NUMBER_IN_SHOW));
  const [numberMovies, setNumberMovies] = useState(NUMBER_IN_SHOW);

  const handleClickShowMore = () => {
    const _qty = numberMovies + NUMBER_IN_SHOW;
    const qty = (_qty < moviesByGenre.length) ? _qty : moviesByGenre.length;
    setNumberMovies(qty);
    setMoviesShow(getMoviesShow(qty));
  };

  useEffect(() => {
    setNumberMovies(NUMBER_IN_SHOW);
    setMoviesShow(getMoviesShow(NUMBER_IN_SHOW));
  }, [genreActive]);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {genres.map((genre, i) => (
          <li
            key={`${genre} + ${i}`}
            className={`catalog__genres-item ${genreActive === genre ? `catalog__genres-item--active` : ``}`}
            onClick = {() => handleClickGenre(genre)}
          >
            <a href="#" className="catalog__genres-link">{genre}</a>
          </li>
        ))}
      </ul>
      <div className="catalog__movies-list">
        <MovieList movies={moviesShow} />
      </div>
      {(numberMovies < moviesByGenre.length) &&
        <div className="catalog__more">
          <button
            onClick={handleClickShowMore}
            className="catalog__button" type="button"
          >Show more</button>
        </div>
      }
    </section>
  );
};

Catalog.propTypes = {
  moviesByGenre: MoviesTypes,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  genreActive: PropTypes.string.isRequired,
  handleClickGenre: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleClickGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.getFilmsByGenre(genre));
  },
});

const mapStateToProps = (state) => ({
  moviesByGenre: state.moviesByGenre,
  genres: state.genres,
  genreActive: state.genreActive,
});

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
