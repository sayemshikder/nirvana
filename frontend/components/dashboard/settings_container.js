import { connect } from 'react-redux';
import React from 'react';
import SettingsModal from './settings';
import { requestTeamMembers } from '../../actions/user_actions';
import { requestTeam } from '../../actions/team_actions';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestTeamMembers: (teamId) => dispatch(requestTeamMembers(teamId)),
    requestTeam: (teamId) => dispatch(requestTeam(teamId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsModal);
