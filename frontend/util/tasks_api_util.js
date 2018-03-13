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
