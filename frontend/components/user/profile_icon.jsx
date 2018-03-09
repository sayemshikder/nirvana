import React from 'react';
import ProfileDetailsContainer from './profile_details_container';

class Profile extends React.Component {
  render() {
    const { user, showProfileDetailsModal, closeModal } = this.props;

    return (
      <div>
        <img onMouseEnter={ () => showProfileDetailsModal(user.id) }
          onMouseLeave={ closeModal }
          className="profile__avatar"
          src={ user.avatarUrl } />
        <ProfileDetailsContainer userId={user.id} />
      </div>
    );
  }
}

export default Profile;
