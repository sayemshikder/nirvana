import React from 'react';

class TaskDetail extends React.Component {
  constructor() {
    super();
    this.renderTaskAssignedInfo = this.renderTaskAssignedInfo.bind(this);
  }

  renderTaskAssignedInfo() {
    const { assignee, creator } = this.props;

    if (this.props.assignee) {
      return (
        <li className="task-detail__list-history-item">
          <span className="task-detail__list-history-item--creator">{creator.name}</span> assigned to {assignee.name}
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
    const date = fullDate.getDate();

    let monthDate = `${ month } ${ date }`;
    if (fullDate.getYear() !== new Date().getYear()) {
      monthDate += `, ${ fullDate.getFullYear() }`;
    }
    
    return (
      <div className="task-detail">
        <div className="task-detail__header">
          <div className="task-detail__header-assignee">{ assignee ? assignee.name : 'Loading...'}</div>
          <div className="task-detail__header-date">{ monthDate }</div>
        </div>
        <div className="task-detail__list">
          <ul>
            <div className="task-detail__list--editable">
              <li className="task-detail__list-item task-detail__list-project-name">{ project.name }</li>
              <li className="task-detail__list-item task-detail__list-task-name">{ task.name }</li>
              <li className="task-detail__list-item task-detail__list-task-description">{ task.description }</li>
            </div>
            <div className="task-detail__list--history">
              <li className="task-detail__list-history-item">
                <span className="task-detail__list-history-item--creator">{ creator.name }</span> created task.
              </li>
              <li className="task-detail__list-history-item">
                <span className="task-detail__list-history-item--creator">{ creator.name }</span> added to {project.name}
              </li>
              { this.renderTaskAssignedInfo() }
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default TaskDetail;
