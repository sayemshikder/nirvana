import { connect } from 'react-redux';
import React from 'react';
import Dash from './dash';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
