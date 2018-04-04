import React from 'react';
import { Link, Route } from 'react-router-dom';
import { isEmpty } from 'lodash';
import ProfileIconContainer from '../user/profile_icon_container';
import TaskIndexContainer from '../task/task_index_container';
import TaskDetailContainer from '../task/task_detail_container';
import SettingsModal from './settings_container';
import ProjectListContainer from './../project/project_list_container.js';
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  componentDidMount() {
    const {
      requestAllTeams,
      requestTeam,
      requestProjectsByTeamId,
      requestTeamMembers,
      requestTasksByUserAndTeamIds,
      requestUser,
      loggedInUser,
      currentTeamId
    } = this.props;

    requestAllTeams().then(() => {
      requestTeam(currentTeamId);
      requestProjectsByTeamId(currentTeamId);
      requestTeamMembers(currentTeamId);
      // requestTasksByTeamId(currentTeamId);
      requestTasksByUserAndTeamIds(loggedInUser.id, currentTeamId);
    });
    requestUser(this.props.currentUser.id);
  }

  logout() {
    this.props.logout();
  }

  renderHeader() {
    const { currentUser, currentTeam, loggedInUser } = this.props;

    let prefix = 'My';
    if (currentUser.id !== loggedInUser.id) {
      prefix = `${currentUser.name.split(' ')[0]}'s`;
    }

    return `${ prefix } Tasks in ${ currentTeam ? currentTeam.name : 'Loading...' }`;
  }

  componentWillReceiveProps(newProps) {
    // const oldTask = this.props.currentTask;
    // const newTask = newProps.currentTask;
    // if (oldTask && newTask && oldTask.id !== newTask.id) {
    //   this.render();
    // }
  }

  // renderTaskDetail() {
  //   const { currentTask } = this.props;
  //
  //   if (!isEmpty(currentTask)) {
  //     return (
  //       <TaskDetailContainer task={ currentTask } />
  //     );
  //   }
  // }

  render() {
    // TODO: refactor this eyesore into SettingsContainer
    const {
      currentUser,
      currentTeam,
      teams,
      teamMembers,
      requestUser,
      loggedInUser,
      requestTeam,
      requestTeamMembers,
      requestTasksByUserId,
      projects,
      requestAllTeams,
      requestProjectsByTeamId,
      tasks
    } = this.props;

    const avatarUrl = currentUser.avatarUrl;

    const profiles = teamMembers.map((user) => {
      return (
        <Link to={`/users/${user.id}`} key={ user.id }>
          <li className="profile">
            <ProfileIconContainer user={user} />
          </li>
        </Link>
      );
    });

    const ownProfile = <ProfileIconContainer user={ currentUser } />;

    return (
      <div className="dash">
        <div className="dash-sidebar">
          <li className="logo_dark"></li>
          <div className="dash-sidebar__member-header">Team Members</div>
          <ul className="dash-sidebar__member-avatars">
            { profiles }
          </ul>


          <ProjectListContainer
            projects={ projects }
          />
        </div>

        <div className="dash-tasks">

          <ul className="dash-nav">
            <div className="dash-nav--left">
              <li className="dash-nav__item dash-nav__item--selected">My Tasks</li>
              <li className="dash-nav__item dash-nav__item-inbox">Inbox</li>
            </div>

            <div className="dash-nav--center">
              <li className="dash-nav__item">
                <input className="dash-search" type="text" placeholder="Search"/>
              </li>
            </div>

            <SettingsModal
              teamName={ currentTeam ? currentTeam.name : 'Loading...' }
              avatarUrl={ loggedInUser.avatarUrl }
              logout={ this.logout }
              teams={ teams }
              currentUserId={ currentUser.id }
              currentTeam={ currentTeam }
              requestTeam={ requestTeam }
              requestTeamMembers={ requestTeamMembers }
              requestAllTeams={ requestAllTeams }
              requestUser={ requestUser }
              requestTasksByUserId={ requestTasksByUserId }
              requestProjectsByTeamId={ requestProjectsByTeamId }
            />
          </ul>

          <div className="dash-sub-nav">
            <div className="dash-sub-nav__header">
              <img className="dash-sub-nav__header-avatar" src={ currentUser.avatarUrl } />
              <h1 className="dash-sub-nav__header-team">
                { this.renderHeader() }
              </h1>
            </div>

            <ul className="dash-sub-nav__navbar">
              <li className="dash-sub-nav__navbar-item dash-sub-nav__navbar-item--selected">List</li>
              <li className="dash-sub-nav__navbar-item">Calendar</li>
              <li className="dash-sub-nav__navbar-item">Files</li>
            </ul>
          </div>

          <div className="dash-task-content">
            <TaskIndexContainer />
            <Route path="/tasks/:taskId" component={ TaskDetailContainer } />
          </div>

        </div>
      </div>
    );
  }
}

export default Dashboard;
