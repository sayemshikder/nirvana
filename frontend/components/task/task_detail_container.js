import { connect } from 'react-redux';
import React from 'react';
import TaskDetail from './task_detail.jsx';
import { updateTask, requestTask } from '../../actions/task_actions.js';

// TODO: temporary imports
import { requestProject } from '../../actions/project_actions.js';
import { requestTasksByProjectId } from '../../actions/task_actions.js';
import { requestUser } from '../../actions/user_actions.js';
import { selectTeamMembers } from '../../reducers/selectors.js';

const mapStateToProps = (state, ownProps) => {
  if (!state.entities.tasks.tasks) {
    return {};
  }

  const task = state.entities.tasks.tasks[ownProps.match.params.taskId];

  return {
    // task: ownProps.task,
    teamMembers: selectTeamMembers(state),
    task,
    creator: state.entities.users.teamMembers[task.creatorId],
    assignee: state.entities.users.teamMembers[task.assigneeId],
    project: state.entities.projects.projects[task.projectId],
    currentUser: state.session.loggedInUser,
    currentProject: state.entities.projects.currentProject,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTask: (task) => dispatch(updateTask(task)),
    requestTask: (taskId) => dispatch(requestTask(taskId)),
    requestProject: (projectId) => dispatch(requestProject(projectId)),
    requestTasksByProjectId: (projectId) => dispatch(requestTasksByProjectId(projectId)),
    requestUser: (userId) => dispatch(requestUser(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail);
