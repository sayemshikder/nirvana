import React from 'react';

class ProfileDetails extends React.Component {
  constructor(props) {
    super(props);

    this.renderBottom = this.renderBottom.bind(this);
  }

  renderBottom() {
    const { user } = this.props;

    if (user.role || user.dept || user.aboutMe) {
      return (
        <div className="profile-card__bottom">
          <div className="profile-card__bottom-role">{ user.role }</div>
          <div className="profile-card__bottom-dept">{ user.dept }</div>
          <div className="profile-card__bottom-about-me">{ user.aboutMe }</div>
        </div>
      );
    }
    return null;
  }

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

        { this.renderBottom() }
      </div>
    );
  }
}

export default ProfileDetails;
