import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

class SettingsModal extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleTeamClick = this.handleTeamClick.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleTeamClick(teamId) {
    this.props.requestAllTeams().then(() => {
      this.props.requestTeam(teamId);
      this.props.requestProjectsByTeamId(teamId);
    });
    this.props.requestTeamMembers(teamId);
    this.props.requestUser(this.props.currentUser.id);
    this.props.requestTasksByUserId(this.props.currentUser.id);

    // TODO: do this w/ react
    // $('.dash-sub-nav__header-team').text('All Tasks in ' + this.props.currentTeam.name);
    // $('.dash-sub-nav__header-avatar').attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==');
  }

  render () {
    const { name, avatarUrl, logout, teams, currentTeam } = this.props;
    const teamList = teams.map((team) => {
      return (
        <Link to={`/teams/${team.id}`} key={ team.id }>
          <li onClick={ () => this.handleTeamClick(team.id)} className="dash-nav__settings-dropdown-item">
            { team.name }
          </li>
        </Link>
      );
    });

    return (
      <div>
        <li className="dash-nav__settings-dropdown" onClick={this.handleOpenModal}>
          <div className="settings-team-name">{ currentTeam ? currentTeam.name : 'Loading...' }</div>
          <a src="#">
            <img className="dash-nav__avatar" src={ avatarUrl } />
          </a>
        </li>

        <Modal isOpen={this.state.showModal}
          contentLabel="Settings Modal"
          className="react-modal"
          overlayClassName="react-modal-overlay"
          shouldCloseOnOverlayClick={true}
          onRequestClose={ this.handleCloseModal }
        >
          <ul>
            <div onClick={ this.handleCloseModal }>
              { teamList }
              <li className="dash-nav__settings-dropdown-item settings-logout" onClick={ logout }>Log Out</li>
            </div>
          </ul>
        </Modal>
      </div>
    );
  }
}

export default SettingsModal;
