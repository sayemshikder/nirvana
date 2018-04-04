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
      requestTasksByUserAndTeamIds,
      loggedInUser
    } = this.props;

    // Clicked user avatar
    if (currentUser && (currentUser.id !== nextProps.currentUser.id)) {
      requestTasksByUserAndTeamIds(nextProps.currentUser.id, currentTeam.id);
    // Changed teams via settings dropdown
    } else if (currentTeam && (currentTeam.id !== nextProps.currentTeam.id)) {
      requestTasksByUserAndTeamIds(loggedInUser.id, nextProps.currentTeam.id);
      // requestTasksByTeamId(nextProps.currentTeam.id);
    } else if (currentProject && (currentProject.id !== nextProps.currentProject.id)) {
      // debugger
      // requestTasksByProjectId(nextProps.currentProject.id);
      // requestTasksByUserAndTeamIds(loggedInUser.id, currentTeam.id);
    }
  }

  handleAddTask() {
    this.props.createTask({
      creator_id: this.props.currentUser.id,
      project_id: this.props.currentProject.id
    });
    $('.task-index__list').animate({scrollTop: $('.task-index__list-section').height()}, 'slow');
  }

  // handleClick={ () => requestTask(task.id) } />
  render () {
    const { tasks, requestTask } = this.props;
    const taskItems = tasks.map((task) => (
      <Link to={`/tasks/${task.id}`} key={task.id}>
        <TaskIndexItemContainer
          task={ task }
          key={ task.id } />
      </Link>
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
