import React from 'react';
import { Link } from 'react-router-dom';

class DashboardNav extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
  }

  render() {
    return (
      <ul>
        <li onClick={ this.logout }>Logout</li>
      </ul>
    );
  }
}

export default DashboardNav;
