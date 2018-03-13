import * as UsersApiUtil from '../util/users_api_util';
import * as ProjectsApiUtil from '../util/projects_api_util';

export const RECEIVE_TEAM_MEMBERS = 'RECEIVE_TEAM_MEMBERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_PROJECT_MEMBERS = 'RECEIVE_PROJECT_MEMBERS';

export const OPEN_PROFILE_DETAILS_MODAL = 'OPEN_PROFILE_DETAILS_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const receiveTeamMembers = (teamMembers) => {
  return {
    type: RECEIVE_TEAM_MEMBERS,
    teamMembers
  };
};

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const receiveProjectMembers = (projectMembers) => {
  return {
    type: RECEIVE_PROJECT_MEMBERS,
    projectMembers
  };
};

export const showProfileDetailsModal = (userId) => {
  return {
    type: OPEN_PROFILE_DETAILS_MODAL,
    userId
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const requestTeamMembers = (teamId) => (dispatch) => {
  return UsersApiUtil.fetchTeamMembers(teamId).then((teammates) => {
    dispatch(receiveTeamMembers(teammates));
  });
};

export const requestProjectMembers = (projectId) => (dispatch) => {
  return ProjectsApiUtil.fetchProject(projectId).then((project) => {
    dispatch(receiveProjectMembers(project.members));
  });
};

export const requestUser = (userId) => (dispatch) => {
  return UsersApiUtil.fetchUser(userId).then((user) => {
    dispatch(receiveUser(user));
  });
};
