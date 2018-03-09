import React from 'react';

class Profile extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <li className="profile">
        <img className="profile__avatar" src={ user.avatarUrl } />
      </li>
    );
  }
}

export default Profile;
