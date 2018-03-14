import { merge } from 'lodash';

import { RECEIVE_ALL_TASKS, RECEIVE_TASK, CLEAR_TASK } from '../actions/task_actions';

const tasksReducer = (oldState={}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_TASKS:
      return {
        tasks: action.tasks,
        currentTask: {}
      };
    case RECEIVE_TASK:
      return merge({}, oldState, {
        currentTask: action.task
      });
    case CLEAR_TASK:
      return merge({}, oldState, {
        currentTask: {}
      });
    default:
      return oldState;
  }
};

export default tasksReducer;
