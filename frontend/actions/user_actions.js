import * as UsersApiUtil from '../util/users_api_util';

export const RECEIVE_ALL_TEAMMATES = 'RECEIVE_ALL_TEAMMATES';
export const OPEN_PROFILE_DETAILS_MODAL = 'OPEN_PROFILE_DETAILS_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const receiveAllTeammates = (teammates) => {
  return {
    type: RECEIVE_ALL_TEAMMATES,
    teammates
  };
};

export const showProfileDetailsModal = (userId) => {
  return {
    type: OPEN_PROFILE_DETAILS_MODAL,
    userId
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const requestAllTeammates = () => (dispatch) => {
  return UsersApiUtil.fetchTeammates().then((teammates) => {
    dispatch(receiveAllTeammates(teammates));
  });
};
