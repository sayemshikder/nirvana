import React from 'react';
import { Link } from 'react-router-dom';
import TaskIndexItem from './task_index_item';

class TaskIndex extends React.Component {
  componentDidMount() {
    // this.props.requestTasksByUserId(this.props.currentUser.id);
  }

  componentWillReceiveProps(nextProps) {
    const { currentUser,
      currentProject,
      currentTeam,
      requestTasksByUserId,
      requestTasksByProjectId,
      requestTasksByTeamId,
      requestTasksByUserAndTeamIds
    } = this.props;

    if (currentUser && (currentUser.id !== nextProps.currentUser.id)) {
      requestTasksByUserAndTeamIds(nextProps.currentUser.id, currentTeam.id);
    } else if (currentProject && (currentProject.id !== nextProps.currentProject.id)) {
      requestTasksByProjectId(nextProps.currentProject.id);
    } else if (currentTeam && (currentTeam.id !== nextProps.currentTeam.id)) {
      requestTasksByTeamId(nextProps.currentTeam.id);
    }
  }

  render () {
    const { tasks, requestTask } = this.props;
    const taskItems = tasks.map((task) => (
      <TaskIndexItem
        task={ task }
        key={ task.id }
        handleClick={ () => requestTask(task.id) } />
    ));

    // goes after task-index__list-section
    // <div className="task-index__list-section-header">
    //   <i className="dropdown_icon"></i>
    //   <span>New Tasks</span>
    // </div>

    return (
      <div className="task-index">
        <div className="task-index__header">
          <Link to="#" className="task-index__add-task-btn">Add Task</Link>
        </div>

        <div className="task-index__list">
          <div className="task-index__list-section">
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
