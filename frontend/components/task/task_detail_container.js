import { connect } from 'react-redux';
import React from 'react';
import TaskDetail from './task_detail.jsx';
import { updateTask } from '../../actions/task_actions.js';

// TODO: temporary imports
import { requestProject } from '../../actions/project_actions.js';
import { requestTasksByProjectId } from '../../actions/task_actions.js';
import { requestUser } from '../../actions/user_actions.js';

const mapStateToProps = (state, ownProps) => {
  return {
    task: ownProps.task,
    creator: state.entities.users.teamMembers[ownProps.task.creatorId],
    assignee: state.entities.users.teamMembers[ownProps.task.assigneeId],
    project: state.entities.projects.projects[ownProps.task.projectId],
    currentUser: state.session.loggedInUser,
    currentProject: state.entities.projects.currentProject,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTask: (task) => dispatch(updateTask(task)),
    requestProject: (projectId) => dispatch(requestProject(projectId)),
    requestTasksByProjectId: (projectId) => dispatch(requestTasksByProjectId(projectId)),
    requestUser: (userId) => dispatch(requestUser(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail);
