import { connect } from 'react-redux';
import React from 'react';
import Dash from './dash';
import { logout } from '../../actions/session_actions';
import { requestTeamMembers, requestUser } from '../../actions/user_actions';
import { requestProjectsByTeamId } from '../../actions/project_actions';
import { requestTeam, requestAllTeams} from '../../actions/team_actions';
import { requestTask, requestTasksByUserId } from '../../actions/task_actions';
import { selectProjectMembers,
  selectAllTeams,
  selectTeamMembers,
  selectCurrentTeam,
  selectAllProjects,
  selectAllTasks,
  selectCurrentUser,
  selectCurrentProject,
  selectCurrentTask,
} from '../../reducers/selectors';

// TODO: remove unused imports

const mapStateToProps = (state) => {
  const teams = selectAllTeams(state);
  const projects = selectAllProjects(state);
  const tasks = selectAllTasks(state);
  const currentUser = selectCurrentUser(state) || state.session.loggedInUser;

  return {
    teams,
    projects,
    tasks,
    currentUser,
    currentTeam: selectCurrentTeam(state) || teams[0],
    currentProject: selectCurrentProject(state),
    currentTask: selectCurrentTask(state),
    loggedInUser: state.session.loggedInUser,
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
    requestAllTeams: () => dispatch(requestAllTeams()),
    requestProjectsByTeamId: (teamId) => dispatch(requestProjectsByTeamId(teamId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
