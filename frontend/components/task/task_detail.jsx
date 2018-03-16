import React from 'react';
import { Redirect } from 'react-router-dom';

class TaskDetail extends React.Component {
  constructor(props) {
    super(props);

    if (props.task) {
      const { id, name, description } = props.task;

      this.state = {
        id,
        name: name || '',
        description: description || ''
      };
    }

    this.renderHistory = this.renderHistory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSync = this.handleChangeSync.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleProjectClick = this.handleProjectClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const { id, name, description } = newProps.task;
    this.setState({
      id,
      name,
      description
    });
  }

  handleChange(e) {
    const field = e.target.name;
    const value = e.target.value;
    this.setState({
      [field]: value
    });
  }

  handleChangeSync(e) {
    const field = e.target.name;
    const value = e.target.value;
    this.setState({
      [field]: value
    }, this.updateTask);
  }

  updateTask() {
    this.props.updateTask(this.state);
  }

  handleBlur(e) {
    this.updateTask();
  }

  // TODO: buggy
  handleProjectClick(e) {
    const { task } = this.props;
    this.props.requestProject(task.projectId);
    this.props.requestTasksByProjectId(task.projectId);
    this.props.requestUser(this.props.currentUser.id);
    // TODO: do this w/ redux
    $('.dash-sub-nav__header-team').text(this.props.currentProject.name);
    // transparent 1x1 pixel
    $('.dash-sub-nav__header-avatar').attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==');
  }

  renderHistory() {
    const { assignee, creator, project } = this.props;
    const output = [];
    if (creator) {
      output.push(
        <li className="task-detail__list-history-item" key={ output.length }>
          <span className="task-detail__list-history-item--creator">{ creator.name }</span> created task.
        </li>
      );
      if (project) {
        output.push(
          <li className="task-detail__list-history-item" key={ output.length }>
            <span className="task-detail__list-history-item--creator">{ creator.name }</span> added to {project.name}.
          </li>
        );
      }
      if (assignee) {
        output.push(
          <li className="task-detail__list-history-item" key={ output.length }>
            <span className="task-detail__list-history-item--creator">{creator.name}</span> assigned to {assignee.name}.
          </li>
        );
      }
    }
    return (
      <div>
        { output }
      </div>
    );
  }

  render () {
    const { task, assignee, project, creator } = this.props;
    if (!task) {
      return <Redirect to="/dashboard" />;
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
              <li className="task-detail__list-item task-detail__list-project-name" onClick={ this.handleProjectClick }>{ project ? project.name : 'Add to project' }</li>
              <li className="task-detail__list-item task-detail__list-task-name">
                <textarea className="task-detail-textarea"
                  placeholder="Write a task name"
                  name="name"
                  value={ this.state.name || '' }
                  onChange={ this.handleChangeSync } />
              </li>
              <li className="task-detail__list-item task-detail__list-task-description">
                <textarea
                  className="task-detail-textarea"
                  placeholder="Description"
                  name="description"
                  value={ this.state.description || '' }
                  onChange={ this.handleChange }
                  onBlur={ this.handleBlur } />
              </li>
            </div>
            <div className="task-detail__list--history">
              { this.renderHistory() }
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default TaskDetail;
