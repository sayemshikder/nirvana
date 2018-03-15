import { connect } from 'react-redux';
import React from 'react';
import {
  updateTask,
} from '../../actions/task_actions.js';
import {
} from '../../reducers/selectors.js';
import TaskIndexItem from './task_index_item.jsx';

const mapStateToProps = (state, ownProps) => {
  return ownProps;
};

const mapDispatchToProps = dispatch => {
  return {
    updateTask: (task) => dispatch(updateTask(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndexItem);
