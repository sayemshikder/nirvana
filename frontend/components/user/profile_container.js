import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import Profile from './profile';

const mapStateToProps = ({ errors }) => {
  return {
    formType: 'Sign Up'
  };
};

// TODO: direct viewer to user's task list on click
const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
