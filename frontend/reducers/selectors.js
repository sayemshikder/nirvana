import values from 'lodash/values';

export const selectAllUsers = (state) => {
  return values(state.entities.users);
};

export const selectAllTeams = (state) => {
  return values(state.entities.teams);
};

export const selectModalUserId = (state) => {
  return state.ui.user.userId;
};
