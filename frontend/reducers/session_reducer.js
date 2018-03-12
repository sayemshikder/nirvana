import { RECEIVE_LOGGED_IN_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullUser = Object.freeze({
  loggedInUser: null
});

const sessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_LOGGED_IN_USER:
      const loggedInUser = action.loggedInUser;
      return merge({}, oldState, { loggedInUser });
    default:
      return oldState;
  }
};

export default sessionReducer;
