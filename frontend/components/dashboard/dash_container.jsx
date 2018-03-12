import { connect } from 'react-redux';
import React from 'react';
import Dash from './dash';
import { logout } from '../../actions/session_actions';
import { requestProjectMembers, requestUser } from '../../actions/user_actions';
import { requestAllTeams } from '../../actions/team_actions';
import { selectProjectMembers, selectAllTeams } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  const teams = selectAllTeams(state);
  return {
    currentUser: state.entities.users.currentUser || state.session.loggedInUser,
    currentTeam: state.entities.teams.currentTeam || teams[0],
    loggedInUser: state.session.loggedInUser,
    projectMembers: selectProjectMembers(state),
    teams,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    requestProjectMembers: (projectId) => dispatch(requestProjectMembers(projectId)),
    requestAllTeams: () => dispatch(requestAllTeams()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
