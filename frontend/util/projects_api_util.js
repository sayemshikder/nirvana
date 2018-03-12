export const fetchProject = (projectId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/projects/${projectId}`
  });
};
