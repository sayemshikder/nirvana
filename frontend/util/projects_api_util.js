export const fetchProjects = (teamId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/teams/${teamId}/projects`
  });
};

export const fetchProject = (projectId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/projects/${projectId}`
  });
};
