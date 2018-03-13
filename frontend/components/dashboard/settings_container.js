import { connect } from 'react-redux';
import React from 'react';
import SettingsModal from './settings';
import { requestTeamMembers, requestUser } from '../../actions/user_actions';
import { requestTeam } from '../../actions/team_actions';

// Note, dash.jsx is using SettingsModal currently
// Note, dash.jsx is using SettingsModal currently
// Note, dash.jsx is using SettingsModal currently

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.loggedInUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestTeamMembers: (teamId) => dispatch(requestTeamMembers(teamId)),
    requestTeam: (teamId) => dispatch(requestTeam(teamId)),
    requestUser: (userId) => dispatch(requestUser(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsModal);
