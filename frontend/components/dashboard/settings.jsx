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
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    const { name, avatarUrl, logout, teams } = this.props;

    return (
      <div>
        <li className="dash-nav__settings-dropdown" onClick={this.handleOpenModal}>
          <div>CURRENT TEAM</div>
          <a src="#">
            <img className="dash-nav__avatar" src={ avatarUrl } />
          </a>
        </li>

        <Modal isOpen={this.state.showModal}
          contentLabel="Settings Modal"
          className="react-modal"
          overlayClassName="react-modal-overlay">

          <h3>Teams</h3>
          { teams.map((team) => <li>{ team.name }</li>) }

          <button onClick={ logout }>Logout</button>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>
      </div>
    );
  }
}

export default SettingsModal;