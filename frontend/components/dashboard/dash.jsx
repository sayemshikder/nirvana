import React from 'react';
import { Link } from 'react-router-dom';

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
    const avatarUrl = this.props.currentUser.avatarUrl
        || 'http://via.placeholder.com/100/232e9d/232e9d';

    return (
      <div className="dash">
        <div className="dash-sidebar">
          <li className="logo_dark"></li>
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

            <li className="dash-nav__item">TEAM NAME, USER ICON</li>
            <li className="dash-nav__item"><button onClick={ this.logout }>Logout</button></li>
          </ul>

          <div className="dash-sub-nav">
            <div className="dash-sub-nav__header">
              <img className="dash-sub-nav__header-avatar" src={avatarUrl} />
              <h1 className="dash-sub-nav__header-team">My Tasks in TEAM</h1>
            </div>

            <ul className="dash-sub-nav__navbar">
              <li className="dash-sub-nav__navbar-item dash-sub-nav__navbar-item--selected">List</li>
              <li className="dash-sub-nav__navbar-item">Calendar</li>
              <li className="dash-sub-nav__navbar-item">Files</li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default Dashboard;
