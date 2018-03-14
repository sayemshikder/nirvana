import { connect } from 'react-redux';
import React from 'react';
import ProjectList from './project_list';
import { requestProject } from '../../actions/project_actions.js';
import { requestTasksByProjectId } from '../../actions/task_actions.js';
import { requestUser } from '../../actions/user_actions.js';
import { selectCurrentUser } from '../../reducers/selectors.js';

// TODO: remove unused imports

const mapStateToProps = (state, ownProps) => {
  return {
    projects: ownProps.projects,
    currentUser: selectCurrentUser(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestProject: (projectId) => dispatch(requestProject(projectId)),
    requestTasksByProjectId: (projectId) => dispatch(requestTasksByProjectId(projectId)),
    requestUser: (userId) => dispatch(requestUser(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
