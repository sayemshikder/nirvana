import React from 'react';

class TaskDetail extends React.Component {
  render () {
    const { task, assignee } = this.props;

    if (!task) {
      return null;
    }

    const date = new Date(task.dueDate);
    const monthDate = date.toString().split(' ')[1] + ' ' + date.getDate();

    return (
      <div className="task-detail">
        <div className="task-detail__header">
          <div className="task-detail__header-assignee">{ assignee ? assignee.name : 'Loading...'}</div>
          <div className="task-detail__header-date">{ monthDate }</div>
        </div>
        <div className="task-detail__list">
          <ul>
            <li>Project ID: { task.projectId }</li>
            <li>Description: { task.description }</li>
            <li>Creator ID: { task.creatorId }</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TaskDetail;
