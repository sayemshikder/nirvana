import { merge } from 'lodash';

import { RECEIVE_ALL_TEAMS } from '../actions/team_actions';

const teamsReducer = (oldState=[], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_TEAMS:
      return action.teams;
    default:
      return oldState;
  }
};

export default teamsReducer;
