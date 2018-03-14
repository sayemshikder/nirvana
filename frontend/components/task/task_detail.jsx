import React from 'react';

class TaskDetail extends React.Component {
  render () {
    const { task, assignee, project, creator } = this.props;

    if (!task) {
      return null;
    }

    const date = new Date(task.dueDate);
    const monthDate = date.toString().split(' ')[1] + ' ' + date.getDate();

    // <li className="task-detail__list-creator-name">{ creator.name }</li>
    return (
      <div className="task-detail">
        <div className="task-detail__header">
          <div className="task-detail__header-assignee">{ assignee ? assignee.name : 'Loading...'}</div>
          <div className="task-detail__header-date">{ monthDate }</div>
        </div>
        <div className="task-detail__list">
          <ul>
            <li className="task-detail__list-item task-detail__list-project-name">{ project.name }</li>
            <li className="task-detail__list-item task-detail__list-task-name">{ task.name }</li>
            <li className="task-detail__list-item task-detail__list-task-description">{ task.description }</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TaskDetail;
