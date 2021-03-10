import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import {MoviesTypes} from '../proptypes';
import {ActionCreator} from '../../store/actions';

import MovieList from '../movie-list/movie-list';
import ShowMore from '../show-more/show-more';
import LoadingScreen from '../loading-screen/loading-screen';

import {NUMBER_IN_SHOW} from '../../const';
import {fetchFilms} from '../../store/api-actions';

const Catalog = ({moviesByGenre, isDataLoaded, onLoadData, genres, genreActive, handleClickGenre}) => {
  const getMoviesShow = (qty) => {
    return moviesByGenre.slice(0, qty);
  };

  const [moviesShow, setMoviesShow] = useState(getMoviesShow(NUMBER_IN_SHOW));
  const [numberMovies, setNumberMovies] = useState(NUMBER_IN_SHOW);

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  useEffect(() => {
    setNumberMovies(NUMBER_IN_SHOW);
    setMoviesShow(getMoviesShow(NUMBER_IN_SHOW));
  }, [genreActive, moviesByGenre]);

  const handleClickShowMore = () => {
    let qty = numberMovies + NUMBER_IN_SHOW;
    qty = (qty < moviesByGenre.length) ? qty : moviesByGenre.length;
    setNumberMovies(qty);
    setMoviesShow(getMoviesShow(qty));
  };

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
      {isDataLoaded
        ? <MovieList movies={moviesShow} />
        : <LoadingScreen />
      }
      {(numberMovies < moviesByGenre.length) &&
        <ShowMore onClickShowMore={handleClickShowMore} />}
    </section>
  );
};

Catalog.propTypes = {
  moviesByGenre: MoviesTypes,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  genreActive: PropTypes.string.isRequired,
  handleClickGenre: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  moviesByGenre: state.moviesByGenre,
  isDataLoaded: state.isDataLoaded,
  genres: state.genres,
  genreActive: state.genreActive,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFilms());
  },
  handleClickGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.getFilmsByGenre(genre));
  },
});

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
