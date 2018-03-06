import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Logo goes here</h1>
      </Link>
    </header>
    <Route path="/signup" component={SignUpFormContainer}/>

  </div>
);

export default App;
