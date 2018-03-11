import { merge } from 'lodash';

import { RECEIVE_ALL_TEAMMATES, CLEAR_USERS } from '../actions/user_actions';

const usersReducer = (oldState=[], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_TEAMMATES:
      return action.teammates;
    default:
      return oldState;
  }
};

export default usersReducer;
