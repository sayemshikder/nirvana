import React from 'react';

class ProfileDetails extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return (<div></div>);
    }
    return (
      <div className="profile-card">
        <div className="profile-card__top"
          style={ { backgroundImage: `url(${user.avatarUrl})` } }>
          <div className="profile-card__top-name">
            <span className="profile-card__top-name-text">{user.name}</span>
          </div>
        </div>
        <div className="profile-card__bottom">

        </div>
      </div>
    );
  }
}

export default ProfileDetails;
