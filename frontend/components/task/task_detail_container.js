import { connect } from 'react-redux';
import React from 'react';
import TaskDetail from './task_detail.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    task: ownProps.task
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail);
