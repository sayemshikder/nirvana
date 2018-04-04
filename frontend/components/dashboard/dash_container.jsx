import { connect } from 'react-redux';
import React from 'react';
import Dash from './dash';
import { logout } from '../../actions/session_actions';
import { requestTeamMembers, requestUser } from '../../actions/user_actions';
import { requestProjectsByTeamId } from '../../actions/project_actions';
import { requestTeam, requestAllTeams} from '../../actions/team_actions';
import {
  requestTask,
  requestTasksByUserId,
  requestTasksByTeamId,
  requestTasksByUserAndTeamIds
} from '../../actions/task_actions';
import {
  selectProjectMembers,
  selectAllTeams,
  selectTeamMembers,
  selectCurrentTeam,
  selectAllProjects,
  selectAllTasks,
  selectCurrentUser,
  selectCurrentProject,
  selectCurrentTask,
  selectLoggedInUser
} from '../../reducers/selectors';

// TODO: remove unused imports

const mapStateToProps = (state) => {
  const teams = selectAllTeams(state);
  const projects = selectAllProjects(state);
  const tasks = selectAllTasks(state);
  const currentUser = selectCurrentUser(state) || state.session.loggedInUser;
  const currentTeam = selectCurrentTeam(state);
  const loggedInUser = selectLoggedInUser(state);
  return {
    teams,
    projects,
    tasks,
    currentUser,
    currentTeam,
    currentTeamId: currentTeam ? currentTeam.id : loggedInUser.teamIds[0],
    currentProject: selectCurrentProject(state),
    currentTask: selectCurrentTask(state),
    loggedInUser,
    projectMembers: selectProjectMembers(state),
    teamMembers: selectTeamMembers(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    requestTeamMembers: (teamId) => dispatch(requestTeamMembers(teamId)),
    requestTeam: (teamId) => dispatch(requestTeam(teamId)),
    requestUser: (userId) => dispatch(requestUser(userId)),
    requestTask: (taskId) => dispatch(requestUser(taskId)),
    requestTasksByUserId: (userId) => dispatch(requestTasksByUserId(userId)),
    requestTasksByUserAndTeamIds: (userId, teamId) => dispatch(requestTasksByUserAndTeamIds(userId, teamId)),
    requestAllTeams: () => dispatch(requestAllTeams()),
    requestProjectsByTeamId: (teamId) => dispatch(requestProjectsByTeamId(teamId)),
    requestTasksByTeamId: (teamId) => dispatch(requestTasksByTeamId(teamId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
