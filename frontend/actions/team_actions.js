import * as TeamsApiUtil from '../util/teams_api_util';

export const RECEIVE_ALL_TEAMS = 'RECEIVE_ALL_TEAMS';

export const receiveAllTeams = (teams) => {
  return {
    type: RECEIVE_ALL_TEAMS,
    teams
  };
};

export const requestAllTeams = () => (dispatch) => {
  return TeamsApiUtil.fetchTeams().then((teams) => {
    dispatch(receiveAllTeams(teams));
  });
};
