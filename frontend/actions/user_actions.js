import * as UsersApiUtil from '../util/users_api_util';
import * as ProjectsApiUtil from '../util/projects_api_util';

export const RECEIVE_ALL_TEAMMATES = 'RECEIVE_ALL_TEAMMATES';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_PROJECT_MEMBERS = 'RECEIVE_PROJECT_MEMBERS';

export const OPEN_PROFILE_DETAILS_MODAL = 'OPEN_PROFILE_DETAILS_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const receiveAllTeammates = (teammates) => {
  return {
    type: RECEIVE_ALL_TEAMMATES,
    teammates
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

export const requestAllTeammates = () => (dispatch) => {
  return UsersApiUtil.fetchTeammates().then((teammates) => {
    dispatch(receiveAllTeammates(teammates));
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
