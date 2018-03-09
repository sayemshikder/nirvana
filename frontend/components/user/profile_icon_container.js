import { connect } from 'react-redux';
import React from 'react';

import ProfileIcon from './profile_icon';
import { showProfileDetailsModal, closeModal } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  // let user;
  // if (state.entities.users.length > 0) {
  //   user = state.entities.users[ownProps.userId];
  // }
  // return {
  //   user
  // };
  const users = state.entities.users;
  return { users };
};

// TODO: direct viewer to user's task list on click
const mapDispatchToProps = (dispatch) => {
  return {
    showProfileDetailsModal: (userId) => dispatch(showProfileDetailsModal(userId)),
    closeModal: () => dispatch(closeModal())
  };
};

// TODO: might not need msp
export default connect(mapStateToProps, mapDispatchToProps)(ProfileIcon);
