import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

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
  }

  render () {
    const { name, avatarUrl, logout, teams, currentTeam } = this.props;
    const teamList = teams.map((team) => {
      return (
        <li key={ team.id } onClick={ () => this.handleTeamClick(team.id)} className="dash-nav__settings-dropdown-item">
          { team.name }
        </li>
      );
    });

    return (
      <div>
        <li className="dash-nav__settings-dropdown" onClick={this.handleOpenModal}>
          <div>{ currentTeam ? currentTeam.name : 'Loading...' }</div>
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
            { teamList }
            <li className="dash-nav__settings-dropdown-item settings-logout" onClick={ logout }>Log Out</li>
          </ul>
        </Modal>
      </div>
    );
  }
}

export default SettingsModal;
