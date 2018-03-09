import React from 'react';
import { Link } from 'react-router-dom';
import ProfileContainer from '../user/profile_container';
import TaskIndexContainer from '../task/task_index_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.props.requestAllTeammates();
  }

  logout() {
    this.props.logout();
  }

  render() {
    const { currentUser, users } = this.props;
    const avatarUrl = currentUser.avatarUrl;

    const profiles = users.map((user) => (
      <ProfileContainer user={user} key={user.id} />
    ));
    const ownProfile = <ProfileContainer user={currentUser} />;

    return (
      <div className="dash">
        <div className="dash-sidebar">
          <li className="logo_dark"></li>

          <h3>Profile icons go here</h3>
          <ul className="dash-sidebar__member-avatars">
            {profiles}
          </ul>
        </div>

        <div className="dash-tasks">

          <ul className="dash-nav">
            <div className="dash-nav--left">
              <li className="dash-nav__item dash-nav__item--selected">My Tasks</li>
              <li className="dash-nav__item">Inbox</li>
            </div>

            <div className="dash-nav--center">
              <li className="dash-nav__item">
                <input className="dash-search" type="text" placeholder="Search"/>
              </li>
            </div>

            <li className="dash-nav__item"><button onClick={ this.logout }>Temp Logout</button></li>

            <li className="dash-nav__settings-dropdown">
              <div>CURRENT TEAM</div>
              <a src="#">
                <img className="dash-nav__avatar" src={ currentUser.avatarUrl } />
              </a>
            </li>
          </ul>

          <div className="dash-sub-nav">
            <div className="dash-sub-nav__header">
              <img className="dash-sub-nav__header-avatar" src={ currentUser.avatarUrl } />
              <h1 className="dash-sub-nav__header-team">My Tasks in CURRENT TEAM</h1>
            </div>

            <ul className="dash-sub-nav__navbar">
              <li className="dash-sub-nav__navbar-item dash-sub-nav__navbar-item--selected">List</li>
              <li className="dash-sub-nav__navbar-item">Calendar</li>
              <li className="dash-sub-nav__navbar-item">Files</li>
            </ul>
          </div>

          <TaskIndexContainer />
        </div>
      </div>
    );
  }
}

export default Dashboard;
