import * as TasksApiUtil from '../util/tasks_api_util';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const OPEN_TASK_DETAIL = 'OPEN_TASK_DETAIL';
export const CLOSE_TASK_DETAIL = 'CLOSE_TASK_DETAIL';

export const receiveTasks = (tasks) => {
  return {
    type: RECEIVE_TASKS,
    tasks
  };
};

export const openTaskDetail = (taskId) => {
  return {
    type: OPEN_TASK_DETAIL,
    taskId
  };
};

export const closeTaskDetail = () => {
  return {
    type: CLOSE_TASK_DETAIL
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

export const requestTasksByUserAndTeamIds = (userId, teamId) => (dispatch) => {
  return TasksApiUtil.fetchTasksByUserAndTeamIds(userId, teamId).then((tasks) => {
    dispatch(receiveTasks(tasks));
  });
};

export const requestTasksByTeamId = (teamId) => (dispatch) => {
  return TasksApiUtil.fetchTasksByTeamId(teamId).then((tasks) => {
    dispatch(receiveTasks(tasks));
  });
};
