import { connect } from 'react-redux';
import React from 'react';
import DashNav from './nav';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log In'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashNav);
