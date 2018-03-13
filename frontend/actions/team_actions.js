import * as TeamsApiUtil from '../util/teams_api_util';

export const RECEIVE_ALL_TEAMS = 'RECEIVE_ALL_TEAMS';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';

export const receiveAllTeams = (teams) => {
  return {
    type: RECEIVE_ALL_TEAMS,
    teams
  };
};

export const receiveTeam = (team) => {
  return {
    type: RECEIVE_TEAM,
    team
  };
};

export const requestAllTeams = () => (dispatch) => {
  return TeamsApiUtil.fetchTeams().then((teams) => {
    dispatch(receiveAllTeams(teams));
  });
};

export const requestTeam = (teamId) => (dispatch) => {
  return TeamsApiUtil.fetchTeam(teamId).then((team) => {
    dispatch(receiveTeam(team));
  });
};
