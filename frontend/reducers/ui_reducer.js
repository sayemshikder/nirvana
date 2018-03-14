import { merge } from 'lodash';
import { OPEN_PROFILE_DETAILS_MODAL, CLOSE_MODAL } from '../actions/user_actions';
import { OPEN_TASK_DETAIL, CLOSE_TASK_DETAIL } from '../actions/task_actions';

export const USER_PROFILE = 'user_profile';

const defaultState = {
  visibleModal: '',
  user: {},
  task: {},
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
    case OPEN_TASK_DETAIL:
      return merge({}, oldState, {
        task: {
          taskId: action.taskId
        }
      });
    case CLOSE_TASK_DETAIL:
    case CLOSE_MODAL:
      return defaultState;
    default:
      return oldState;
  }
};

export default uiReducer;
