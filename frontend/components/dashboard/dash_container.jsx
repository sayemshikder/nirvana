import { connect } from 'react-redux';
import React from 'react';
import Dash from './dash';
import { logout } from '../../actions/session_actions';
import { requestAllTeammates } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    requestAllTeammates: () => dispatch(requestAllTeammates())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
