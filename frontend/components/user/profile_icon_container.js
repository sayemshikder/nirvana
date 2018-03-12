import { connect } from 'react-redux';
import React from 'react';

import ProfileIcon from './profile_icon';
import { showProfileDetailsModal, closeModal, requestUser } from '../../actions/user_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    showProfileDetailsModal: (userId) => dispatch(showProfileDetailsModal(userId)),
    closeModal: () => dispatch(closeModal()),
    requestUser: (userId) => dispatch(requestUser(userId)),
  };
};

export default connect(null, mapDispatchToProps)(ProfileIcon);
