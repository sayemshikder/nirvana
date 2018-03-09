import { merge } from 'lodash';

import { RECEIVE_ALL_TEAMMATES } from '../actions/user_actions';

const usersReducer = (oldState=[], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_TEAMMATES:
      return merge({}, oldState, action.teammates);
    default:
      return oldState;
  }
};

export default usersReducer;
