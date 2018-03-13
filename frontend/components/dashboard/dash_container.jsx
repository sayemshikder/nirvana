import { connect } from 'react-redux';
import React from 'react';
import Dash from './dash';
import { logout } from '../../actions/session_actions';
import { requestProjectMembers, requestTeamMembers, requestUser } from '../../actions/user_actions';
import { requestAllTeams, requestTeam } from '../../actions/team_actions';
import { selectProjectMembers, selectAllTeams, selectTeamMembers } from '../../reducers/selectors';

// TODO: remove unused imports
const mapStateToProps = (state) => {
  const teams = selectAllTeams(state);

  return {
    teams,
    currentUser: state.entities.users.currentUser || state.session.loggedInUser,
    currentTeam: state.entities.teams.currentTeam || teams[0],
    loggedInUser: state.session.loggedInUser,
    projectMembers: selectProjectMembers(state),
    teamMembers: selectTeamMembers(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    requestProjectMembers: (projectId) => dispatch(requestProjectMembers(projectId)),
    requestAllTeams: () => dispatch(requestAllTeams()),
    requestTeamMembers: (teamId) => dispatch(requestTeamMembers(teamId)),
    requestTeam: (teamId) => dispatch(requestTeam(teamId)),
    requestUser: (userId) => dispatch(requestUser(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
