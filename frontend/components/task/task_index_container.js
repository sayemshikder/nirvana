import { connect } from 'react-redux';
import React from 'react';
import TaskIndex from './task_index';
import { requestTasksByProjectId, requestTasksByUserId } from '../../actions/task_actions.js';
import { selectTasks, selectCurrentUser } from '../../reducers/selectors.js';

const mapStateToProps = (state) => {
  return {
    tasks: selectTasks(state),
    currentUser: selectCurrentUser(state) || state.session.loggedInUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestTasksByProjectId: (projectId) => dispatch(requestTasksByProjectId(projectId)),
    requestTasksByUserId: (userId) => dispatch(requestTasksByUserId(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
