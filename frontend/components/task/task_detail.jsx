import React from 'react';

class TaskDetail extends React.Component {
  constructor() {
    super();
    this.renderTaskAssignee = this.renderTaskAssignee.bind(this);
  }

  renderTaskAssignee() {
    const { assignee, creator } = this.props;

    if (this.props.assignee) {
      return (
        <li className="task-detail__list-history-item">
          <span className="task-detail__list-history-item--creator">{creator.name}</span> assigned to {assignee.name}.
        </li>
      );
    }
  }

  render () {
    const { task, assignee, project, creator } = this.props;

    if (!task) {
      return null;
    }

    const fullDate = new Date(task.dueDate);
    const month = fullDate.toString().split(' ')[1];

    let monthDate;
    if (!task.dueDate) {
      monthDate = 'Due Date';
    } else {
      const date = fullDate.getDate();
      monthDate = `${ month } ${ date }`;

      if (fullDate.getYear() !== new Date().getYear()) {
        monthDate += `, ${ fullDate.getFullYear() }`;
      }
    }

    return (
      <div className="task-detail">
        <div className="task-detail__header">
          <div className="task-detail__header-assignee">{ assignee ? assignee.name : 'Unassigned'}</div>
          <div className="task-detail__header-date">{ monthDate }</div>
        </div>
        <div >
          <ul className="task-detail__list">
            <div className="task-detail__list--editable">
              <li className="task-detail__list-item task-detail__list-project-name">{ project.name }</li>
              <li className="task-detail__list-item task-detail__list-task-name">
                <textarea className="task-detail-textarea" placeholder="Write a task name" value={ task.name } />
              </li>
              <li className="task-detail__list-item task-detail__list-task-description">
                <textarea className="task-detail-textarea" placeholder="Description" value={ task.description } />
              </li>
            </div>
            <div className="task-detail__list--history">
              <li className="task-detail__list-history-item">
                <span className="task-detail__list-history-item--creator">{ creator.name }</span> created task.
              </li>
              <li className="task-detail__list-history-item">
                <span className="task-detail__list-history-item--creator">{ creator.name }</span> added to {project.name}.
              </li>
              { this.renderTaskAssignee() }
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default TaskDetail;
