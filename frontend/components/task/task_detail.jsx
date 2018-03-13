import React from 'react';

class TaskDetail extends React.Component {
  render () {
    const { task } = this.props;

    if (!task) {
      return null;
    }
    
    const date = new Date(task.dueDate);
    const monthDate = date.toString().split(' ')[1] + ' ' + date.getDate();

    return (
      <div className="task-detail">
        <div className="task-detail__header">
          <li>Assignee ID: { task.assigneeId }</li>
          <li>{ monthDate }</li>
        </div>
        <ul>
          <li>Project ID: { task.projectId }</li>
          <li>Description: { task.description }</li>
          <li>Creator ID: { task.creatorId }</li>
        </ul>
      </div>
    );
  }
}

export default TaskDetail;
