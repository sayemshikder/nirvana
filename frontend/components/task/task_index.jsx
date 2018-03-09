import React from 'react';
import { Link } from 'react-router-dom';

class TaskIndex extends React.Component {
  render () {
    return (
      <div className="task-index">
        <div className="task-index__header">
          <Link to="#" className="task-index__add-task-btn">Add Task</Link>
        </div>
      </div>
    );
  }
}

export default TaskIndex;
