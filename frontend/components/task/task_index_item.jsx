import React from 'react';
import { Link } from 'react-router-dom';

class TaskIndexItem extends React.Component {
  render() {
    const { task } = this.props;

    return (
      <li>
        <p>{ task.name }</p>
        <p>{ task.description }</p>
        <p>{ task.dueDate }</p>
        <hr />
      </li>
    );
  }
}

export default TaskIndexItem;
