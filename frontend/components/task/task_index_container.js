import { connect } from 'react-redux';
import React from 'react';
import TaskIndex from './task_index';
import {
  requestTasksByProjectId,
  requestTasksByUserId,
  requestTasksByTeamId,
  requestTasksByUserAndTeamIds,
  requestTask,
  clearTask,
  openTaskDetail,
  closeTaskDetail,
  updateTask,
  createTask,
} from '../../actions/task_actions.js';
import { selectAllTasks,
  selectCurrentUser,
  selectCurrentTeam,
  selectCurrentProject
} from '../../reducers/selectors.js';

const mapStateToProps = (state) => {
  return {
    tasks: selectAllTasks(state),
    currentUser: selectCurrentUser(state) || state.session.loggedInUser,
    currentTeam: selectCurrentTeam(state),
    currentProject: selectCurrentProject(state),
    loggedInUser: state.session.loggedInUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestTasksByProjectId: (projectId) => dispatch(requestTasksByProjectId(projectId)),
    requestTasksByUserId: (userId) => dispatch(requestTasksByUserId(userId)),
    requestTasksByTeamId: (teamId) => dispatch(requestTasksByTeamId(teamId)),
    requestTasksByUserAndTeamIds: (userId, teamId) => dispatch(requestTasksByUserAndTeamIds(userId, teamId)),
    requestTask: (taskId) => dispatch(requestTask(taskId)),
    clearTask: () => dispatch(clearTask()),
    createTask: (task) => dispatch(createTask(task)),
    updateTask: (task) => dispatch(updateTask(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
