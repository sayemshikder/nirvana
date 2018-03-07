import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

import Navbar from './home/navbar';

const App = () => (
  <div>
    <Route exact path="/" component={ Navbar } />
    <Route exact path="/login" component={ Navbar } />
    <Route exact path="/signup" component={ Navbar } />

    <Route path="/login" component={ LoginFormContainer }/>
    <Route path="/signup" component={ SignupFormContainer }/>

  </div>
);

export default App;
