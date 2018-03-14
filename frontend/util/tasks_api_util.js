export const fetchTasksByUserId = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/tasks`
  });
};

export const fetchTasksByProjectId = (projectId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/projects/${projectId}/tasks`
  });
};

export const fetchTasksByTeamId = (teamId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/teams/${teamId}/tasks`
  });
};

export const fetchTasksByUserAndTeamIds = (userId, teamId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/teams/${teamId}/tasks`
  });
};


export const fetchTask = (taskId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/tasks/${taskId}`
  });
};
