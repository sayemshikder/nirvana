import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions.js';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign Up'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
