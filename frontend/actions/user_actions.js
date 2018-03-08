export const RECEIVE_ALL_TEAM_MEMBERS = 'RECEIVE_ALL_TEAM_MEMBERS';

export const receiveAllTeamMembers = (teamMembers) => {
  return {
    type: RECEIVE_ALL_TEAM_MEMBERS,
    users: teamMembers
  };
};

export const requestAllTeamMembers = (ownUserId) => (dispatch) => {

};
