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
import HomeContent from './home/home_content';
import HomeNav from './home/navbar';
import DashContainer from './dashboard/dash_container';

// Refactor to use ui-reducer for displaing modals
const App = () => (
  <div>
    <AuthRoute exact path="/" component={ HomeNav } />
    <AuthRoute exact path="/demo" component={ HomeNav } />
    <AuthRoute exact path="/login" component={ HomeNav } />
    <AuthRoute exact path="/signup" component={ HomeNav } />

    <AuthRoute exact path="/" component={ HomeContent } />

    <AuthRoute path="/login" component={ LoginFormContainer } />
    <AuthRoute path="/demo" component={ LoginFormContainer } />
    <AuthRoute path="/signup" component={ SignupFormContainer } />

    <ProtectedRoute path="/dashboard" component={DashContainer} />
  </div>
);

export default App;
