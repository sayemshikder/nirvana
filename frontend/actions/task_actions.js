import * as TasksApiUtil from '../util/tasks_api_util';

export const RECEIVE_ALL_TASKS = 'RECEIVE_ALL_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const CLEAR_TASK = 'CLEAR_TASK';
export const OPEN_TASK_DETAIL = 'OPEN_TASK_DETAIL';
export const CLOSE_TASK_DETAIL = 'CLOSE_TASK_DETAIL';

export const receiveAllTasks = (tasks) => {
  return {
    type: RECEIVE_ALL_TASKS,
    tasks
  };
};

export const receiveTask = (task) => {
  return {
    type: RECEIVE_TASK,
    task
  };
};

export const clearTask = (task) => {
  return {
    type: CLEAR_TASK
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
    dispatch(receiveAllTasks(tasks));
  });
};

export const requestTasksByUserId = (userId) => (dispatch) => {
  return TasksApiUtil.fetchTasksByUserId(userId).then((tasks) => {
    dispatch(receiveAllTasks(tasks));
  });
};

export const requestTasksByUserAndTeamIds = (userId, teamId) => (dispatch) => {
  return TasksApiUtil.fetchTasksByUserAndTeamIds(userId, teamId).then((tasks) => {
    dispatch(receiveAllTasks(tasks));
  });
};

export const requestTasksByTeamId = (teamId) => (dispatch) => {
  return TasksApiUtil.fetchTasksByTeamId(teamId).then((tasks) => {
    dispatch(receiveAllTasks(tasks));
  });
};

export const requestTask = (taskId) => (dispatch) => {
  return TasksApiUtil.fetchTask(taskId).then((task) => {
    dispatch(receiveTask(task));
  });
};
