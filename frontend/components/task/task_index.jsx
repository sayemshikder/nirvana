import React from 'react';
import { Link } from 'react-router-dom';
import TaskIndexItemContainer from './task_index_item_container';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddTask = this.handleAddTask.bind(this);
  }

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

  handleAddTask() {
    this.props.createTask({

    });
  }

  render () {
    const { tasks, requestTask } = this.props;
    const taskItems = tasks.map((task) => (
      <TaskIndexItemContainer
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
          <Link to="#" className="task-index__add-task-btn" onClick={ this.handleAddTask }>Add Task</Link>
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
