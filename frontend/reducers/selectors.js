import values from 'lodash/values';

export const selectProjectMembers = (state) => {
  return values(state.entities.users.projectMembers);
};

export const selectCurrentUser = (state) => {
  return state.entities.users.currentUser;
};

export const selectLoggedInUser = (state) => {
  return state.session.loggedInUser;
};

export const selectCurrentTeam = (state) => {
  return state.entities.teams.currentTeam;
};

export const selectCurrentProject = (state) => {
  return state.entities.projects.currentProject;
};

export const selectCurrentTask = (state) => {
  return state.entities.tasks.currentTask;
};

export const selectTeamMembers = (state) => {
  return values(state.entities.users.teamMembers);
};

export const selectAllTasks = (state) => {
  return values(state.entities.tasks.tasks);
};

export const selectAllProjects = (state) => {
  return values(state.entities.projects.projects);
};

export const selectAllTeams = (state) => {
  return values(state.entities.teams.ownTeams);
};

export const selectModalUserId = (state) => {
  return state.ui.user.userId;
};
