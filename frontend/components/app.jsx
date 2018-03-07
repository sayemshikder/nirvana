import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

import Navbar from './home/navbar';

const App = () => (
  <div>
    <Route exact path="/" component={ Navbar } />
    <AuthRoute exact path="/login" component={ Navbar } />
    <AuthRoute exact path="/signup" component={ Navbar } />

    <AuthRoute path="/login" component={ LoginFormContainer }/>
    <AuthRoute path="/signup" component={ SignupFormContainer }/>
  </div>
);

export default App;
