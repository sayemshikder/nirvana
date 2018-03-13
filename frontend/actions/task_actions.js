import * as TasksApiUtil from '../util/tasks_api_util';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';

export const receiveTasks = (tasks) => {
  return {
    type: RECEIVE_TASKS,
    tasks
  };
};

export const requestTasksByProjectId = (projectId) => (dispatch) => {
  return TasksApiUtil.fetchTasksByProjectId(projectId).then((tasks) => {
    dispatch(receiveTasks(tasks));
  });
};

export const requestTasksByUserId = (userId) => (dispatch) => {
  return TasksApiUtil.fetchTasksByUserId(userId).then((tasks) => {
    dispatch(receiveTasks(tasks));
  });
};
