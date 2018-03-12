import * as SessionApiUtil from '../util/session_api_util';
import { clearErrors } from './error_actions';

export const RECEIVE_LOGGED_IN_USER = 'RECEIVE_LOGGED_IN_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveLoggedInUser = (loggedInUser) => {
  return {
    type: RECEIVE_LOGGED_IN_USER,
    loggedInUser
  };
};

export const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const signup = (user) => (dispatch) => {
  return (
    SessionApiUtil.signup(user).then((newUser) => {
      dispatch(receiveLoggedInUser(newUser));
      dispatch(clearErrors());
    }, (errors) => {
      return dispatch(receiveSessionErrors(errors.responseJSON));
    })
  );
};

export const login = (user) => (dispatch) => {
  return (
    SessionApiUtil.login(user).then((loggedInUser) => {
      dispatch(receiveLoggedInUser(loggedInUser));
      dispatch(clearErrors());
    }, (errors) => (
      dispatch(receiveSessionErrors(errors.responseJSON))
    ))
  );
};

export const logout = () => (dispatch) => {
  return (
    SessionApiUtil.logout().then(() => (
      dispatch(receiveLoggedInUser(null))
    ), (errors) => (
      dispatch(receiveSessionErrors(errors.responseJSON))
    ))
  );
};
