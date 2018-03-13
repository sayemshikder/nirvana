import * as ProjectsApiUtil from '../util/projects_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

export const receiveAllProjects = (projects) => {
  return {
    type: RECEIVE_ALL_PROJECTS,
    projects
  };
};

export const receiveProject = (project) => {
  return {
    type: RECEIVE_PROJECT,
    project
  };
};

export const requestProjectsByTeamId = (teamId) => (dispatch) => {
  return ProjectsApiUtil.fetchProjects(teamId).then((projects) => {
    dispatch(receiveAllProjects(projects));
  });
};

export const requestProject = (projectId) => (dispatch) => {
  return ProjectsApiUtil.fetchProject(projectId).then((project) => {
    dispatch(receiveProject(project));
  });
};
