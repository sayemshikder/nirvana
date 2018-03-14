import React from 'react';

class ProjectList extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(projectId) {
    this.props.requestProject(projectId);
    this.props.requestTasksByProjectId(projectId);
    this.props.requestUser(this.props.currentUser.id);
  }

  render () {
    const { projects } = this.props;
    const projectLis = projects.map((project) => {
      return (
        <li className="dash-sidebar__projects-list-item" key={ project.id }
          onClick={ () => this.handleClick(project.id) }>
          { project.name }
        </li>
      );
    });

    return (
      <div>
        <div className="dash-sidebar__projects">
          <div className="dash-sidebar__projects-header">Projects</div>
          <ul className="dash-sidebar__projects-list">
            { projectLis }
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectList;
