import React from 'react';
import { Link } from 'react-router-dom';
import TaskIndexItem from './task_index_item';

class TaskIndex extends React.Component {
  componentDidMount() {
    this.props.requestTasksByUserId(this.props.currentUser.id);
  }

  componentWillReceiveProps(nextProps) {
    console.log('received props -------------');

    if (this.props.currentUser !== nextProps.currentUser) {
      console.log('user changed -------------');
      this.props.requestTasksByUserId(nextProps.currentUser.id);
    }
  }

  render () {
    const { tasks } = this.props;
    const taskItems = tasks.map((task) => <TaskIndexItem task={ task } key={ task.id }/>);

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
              { taskItems }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskIndex;
