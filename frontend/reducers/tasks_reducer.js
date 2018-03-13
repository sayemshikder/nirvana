import { merge } from 'lodash';

import { RECEIVE_TASKS } from '../actions/task_actions';

const tasksReducer = (oldState={}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_TASKS:
      return {
        tasks: action.tasks,
      };
    default:
      return oldState;
  }
};

export default tasksReducer;
