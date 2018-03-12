import values from 'lodash/values';

export const selectProjectMembers = (state) => {
  return values(state.entities.users.projectMembers);
};

export const selectAllTeams = (state) => {
  return values(state.entities.teams.ownTeams);
};

export const selectModalUserId = (state) => {
  return state.ui.user.userId;
};
