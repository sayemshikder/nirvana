import { connect } from 'react-redux';
import React from 'react';
import ProjectList from './project_list';
import { requestProject } from '../../actions/project_actions.js';
import { requestTasksByProjectId } from '../../actions/task_actions.js';

// TODO: remove unused imports

const mapStateToProps = (state, ownProps) => {
  return {
    projects: ownProps.projects
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestProject: (projectId) => dispatch(requestProject(projectId)),
    requestTasksByProjectId: (projectId) => dispatch(requestTasksByProjectId(projectId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
