import React from 'react';
import { Link } from 'react-router-dom';

class ProjectList extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(project) {
    this.props.requestProject(project.id);
    this.props.requestTasksByProjectId(project.id);
    this.props.requestUser(this.props.currentUser.id);
    // TODO: do this w/ redux
    $('.dash-sub-nav__header-team').text(project.name);
    // transparent 1x1 pixel
    $('.dash-sub-nav__header-avatar').attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==');
  }

  render () {
    const { projects } = this.props;
    const projectLis = projects.map((project) => {
      // TODO: make a Route for projects
      return (
        <Link to={`/projects/${project.id}`} key={ project.id }>
          <li className="dash-sidebar__projects-list-item" key={ project.id }
            onClick={ () => this.handleClick(project) }>
            { project.name }
          </li>
        </Link>
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
