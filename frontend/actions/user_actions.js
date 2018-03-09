import * as UsersApiUtil from '../util/users_api_util';

export const RECEIVE_ALL_TEAMMATES = 'RECEIVE_ALL_TEAMMATES';

export const receiveAllTeammates = (teammates) => {
  return {
    type: RECEIVE_ALL_TEAMMATES,
    teammates
  };
};

export const requestAllTeammates = () => (dispatch) => {
  return UsersApiUtil.fetchTeammates().then((teammates) => {
    dispatch(receiveAllTeammates(teammates));
  });
};
