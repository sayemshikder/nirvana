import { connect } from 'react-redux';
import React from 'react';
import TaskDetail from './task_detail.jsx';
import { selectTeamMembers, selectCurrentTask } from '../../reducers/selectors.js';

const mapStateToProps = (state, ownProps) => {
  return {
    task: ownProps.task,
    assignee: state.entities.users.teamMembers[ownProps.task.assigneeId],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail);
