import React from 'react';
import ProfileDetailsContainer from './profile_details_container';

class Profile extends React.Component {
  render() {
    const { user, showProfileDetailsModal, closeModal } = this.props;

    return (
      <li className="profile">
        <img onMouseEnter={ () => showProfileDetailsModal(user.id) }
          onMouseLeave={ closeModal }
          className="profile__avatar"
          src={ user.avatarUrl } />
        <ProfileDetailsContainer userId={user.id} />
      </li>
    );
  }
}

export default Profile;
