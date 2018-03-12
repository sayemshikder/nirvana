import { merge } from 'lodash';

import { RECEIVE_PROJECT_MEMBERS, RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_LOGGED_IN_USER } from '../actions/session_actions';

const usersReducer = (oldState={}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_PROJECT_MEMBERS:
      return merge({}, oldState, { projectMembers: action.projectMembers });
    case RECEIVE_USER:
      return merge({}, oldState, { currentUser: action.user} );
    case RECEIVE_LOGGED_IN_USER:
      // TODO: refactor
      return merge({}, oldState, { currentUser: action.loggedInUser });
    default:
      return oldState;
  }
};

export default usersReducer;
