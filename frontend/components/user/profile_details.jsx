import React from 'react';

class ProfileDetails extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return (<div></div>);
    }
    return (
      <div className="profile-card">
        <div className="profile-card__top">
          <img src={ user.avatarUrl } className="profile-card__top-avatar"/>
          <div className="profile-card__top-name">{ user.name }</div>
        </div>
        <div className="profile-card__bottom">

        </div>
      </div>
    );
  }
}

export default ProfileDetails;
