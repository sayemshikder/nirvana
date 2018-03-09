import { merge } from 'lodash';
import { OPEN_PROFILE_DETAILS_MODAL, CLOSE_MODAL } from '../actions/user_actions';

export const USER_PROFILE = 'user_profile';

const defaultState = {
  visibleModal: ''
};

const uiReducer = (oldState = defaultState, action) => {
  switch(action.type) {
    case OPEN_PROFILE_DETAILS_MODAL:
      return merge({}, oldState, {
        visibleModal: USER_PROFILE,
        user: {
          userId: action.userId
        }
      });
    case CLOSE_MODAL:
      return defaultState;
    default:
      return oldState;
  }
};

export default uiReducer;
