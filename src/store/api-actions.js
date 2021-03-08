import {ActionCreator} from './actions';
import {AuthorizationStatus} from '../const';

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
);

export const fetchFilmId = (id) => (dispatch, _getState, api) => (
  api.get(`/films`, {id})
    .then(({data}) => dispatch(ActionCreator.loadFilm(data)))
);

export const fetchFilmIdComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/`, {id})
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
);

export const addComments = ({id}) => (dispatch, _getState, api) => (
  api.post(`/comments/`, {id})
    .then(({data}) => dispatch(ActionCreator.addComments(data)))
);

export const fetchFilmPromo = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(ActionCreator.loadFilmPromo(data)))
);

export const fetchFilmsFavorite = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(ActionCreator.loadFilmsFavorite(data)))
);

export const addFilmFavorite = ({id, status}) => (dispatch, _getState, api) => (
  api.post(`/favorite`, {id, status})
    .then(({data}) => dispatch(ActionCreator.addFilmFavorite(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);
