import { merge } from 'lodash';

import { RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT } from '../actions/project_actions';

const projectsReducer = (oldState={}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      return {
        projects: action.projects,
        currentProject: action.projects[Object.keys(action.projects)[0]]
      };
    case RECEIVE_PROJECT:
      return merge({}, oldState, { currentProject: action.project });
    default:
      return oldState;
  }
};

export default projectsReducer;
