import React from 'react';

class ProjectList extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(projectId) {
    // change projects
    this.props.requestProject(projectId);
    // change tasks
    this.props.requestTasksByProjectId(projectId);
  }

  render () {
    const { projects } = this.props;
    const projectLis = projects.map((project) => {
      return (
        <li key={ project.id }
          onClick={ () => this.handleClick(project.id) }>
          { project.name }
        </li>
      );
    });

    return (
      <div>
        <h3>Projects</h3>
        <ul className="dash-sidebar__projects">
          { projectLis }
        </ul>
      </div>
    );
  }
}

export default ProjectList;
