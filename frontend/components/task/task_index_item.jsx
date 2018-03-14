import React from 'react';
import { Link } from 'react-router-dom';

class TaskIndexItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { task } = this.props;

    const today = new Date();
    const fullDate = new Date(task.dueDate);
    const month = fullDate.toString().split(' ')[1];
    const date = fullDate.getDate();

    let monthDate = `${ month } ${ date }`;
    if (fullDate.getYear() !== today.getYear()) {
      monthDate += `, ${ fullDate.getFullYear() }`;
    }

    return (
      <li className="task-index__item" onClick={ this.props.handleClick }>
        <div className="task-index__task-name">{ task.name }</div>
        <div className={`task-index__task-due-date ${today.getTime() > fullDate.getTime() ? 'past-due' : ''}`}>{ monthDate }</div>
      </li>
    );
  }
}

export default TaskIndexItem;
