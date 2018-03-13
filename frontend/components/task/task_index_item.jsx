import React from 'react';
import { Link } from 'react-router-dom';

class TaskIndexItem extends React.Component {
  render() {
    const { task } = this.props;

    const fullDate = new Date(task.dueDate);
    const month = fullDate.toString().split(' ')[1];
    const date = fullDate.getDate();
    
    let monthDate = `${ month } ${ date }`;
    if (fullDate.getYear() !== new Date().getYear()) {
      monthDate += `, ${ fullDate.getFullYear() }`;
    }

    return (
      <li>
        <p>Name: { task.name }</p>
        <p>Due Date: { monthDate }</p>
        <hr />
      </li>
    );
  }
}

export default TaskIndexItem;
