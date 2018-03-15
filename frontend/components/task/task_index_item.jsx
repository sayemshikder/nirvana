import React from 'react';
import { Link } from 'react-router-dom';

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);

    const { id, name, description } = props.task;
    this.state = {
      id,
      name: name || '',
      description: description || '',
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleBlur(e) {
    // send update action
    this.props.updateTask(this.state);
  }

  updateState(field, value) {
    this.setState({
      [field]: value
    });
  }

  handleChange(e) {
    this.updateState(e.target.name, e.target.value);
  }

  render() {
    const { task } = this.props;
    const { name } = this.state;

    let monthDate;
    const today = new Date();
    const fullDate = new Date(task.dueDate);

    if (!task.dueDate) {
      monthDate = '';
    } else {
      const month = fullDate.toString().split(' ')[1];
      const date = fullDate.getDate();

      monthDate = `${ month } ${ date }`;
      if (fullDate.getYear() !== today.getYear()) {
        monthDate += `, ${ fullDate.getFullYear() }`;
      }
    }

    return (
      <li className="task-index__item"
        onClick={ this.props.handleClick }
        tabIndex="0"
        onBlur={ this.handleBlur }>
        <div className="task-index__task-name">
          <input className="task-index-input"
            name="name"
            onChange={ this.handleChange }
            value={ name } />
        </div>
        <div className={`task-index__task-due-date ${task.dueDate && today.getTime() > fullDate.getTime() ? 'past-due' : ''}`}>
          { monthDate }
        </div>
      </li>
    );
  }
}

export default TaskIndexItem;
