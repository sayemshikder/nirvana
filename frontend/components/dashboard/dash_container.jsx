import { connect } from 'react-redux';
import React from 'react';
import Dash from './dash';
import { logout } from '../../actions/session_actions';
import { requestAllTeammates } from '../../actions/user_actions';
import { requestAllTeams } from '../../actions/team_actions';
import { selectAllUsers, selectAllTeams } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  const teams = selectAllTeams(state);
  
  return {
    currentUser: state.session.currentUser,
    users: selectAllUsers(state),
    teams,
    currentTeam: teams[0] || { name: 'Loading' },
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    requestAllTeammates: () => dispatch(requestAllTeammates()),
    requestAllTeams: () => dispatch(requestAllTeams())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
