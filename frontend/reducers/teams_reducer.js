import { merge } from 'lodash';

import { RECEIVE_ALL_TEAMS, RECEIVE_TEAM } from '../actions/team_actions';

const teamsReducer = (oldState={}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_TEAMS:
      return merge({}, oldState, {
        ownTeams: action.teams,
        currentTeam: action.teams[Object.keys(action.teams)[0]]
      });
    case RECEIVE_TEAM:
      return merge({}, oldState, { currentTeam: action.team });
    default:
      return oldState;
  }
};

export default teamsReducer;
