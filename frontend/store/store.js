import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState, composeEnhancers(
    applyMiddleware(...middlewares)
  ))
);
// const configureStore = (preloadedState = {}) => (
//   createStore(rootReducer, preloadedState, applyMiddleware(...middlewares))
// );

export default configureStore;
