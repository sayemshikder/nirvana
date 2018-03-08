import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
// import { signup, login, logout } from './actions/session_actions';
// import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  //
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, rootEl);
});
