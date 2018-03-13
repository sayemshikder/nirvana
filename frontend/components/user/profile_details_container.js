import { connect } from 'react-redux';
import React from 'react';

import ProfileDetails from './profile_details';
import { USER_PROFILE } from '../../reducers/ui_reducer';
import { selectModalUserId } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  if (!ownProps || (state.ui.visibleModal !== USER_PROFILE)
      || (selectModalUserId(state) !== ownProps.userId)) {
    return {};
  }
  
  return {
    user: state.entities.users.teamMembers[selectModalUserId(state)]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);
