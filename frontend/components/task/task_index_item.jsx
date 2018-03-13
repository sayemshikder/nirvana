import React from 'react';
import { Link } from 'react-router-dom';

class TaskIndexItem extends React.Component {
  render() {
    const { task } = this.props;

    return (
      <li>
        <p>Assignee ID: { task.assigneeId }</p>
        <p>Due Date: { task.dueDate }</p>
        <p>Project ID: { task.projectId }</p>
        <p>Name: { task.name }</p>
        <p>Description: { task.description }</p>
        <p>Creator ID: { task.creatorId }</p>
        <hr />
      </li>
    );
  }
}

export default TaskIndexItem;
