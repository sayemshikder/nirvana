import React from 'react';
import { Link } from 'react-router-dom';

class TaskIndex extends React.Component {
  render () {
    return (
      <div className="task-index">
        <div className="task-index__header">
          <Link to="#" className="task-index__add-task-btn">Add Task</Link>
        </div>

        <div className="task-index__list">
          <div className="task-index__list-section">
            <div className="task-index__list-section-header">
              <i className="dropdown_icon"></i>
              <span>New Tasks</span>
            </div>

            <ul>
              <li>TaskIndexItems go here</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskIndex;
