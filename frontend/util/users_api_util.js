export const fetchTeamMembers = (teamId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/teams/${teamId}/users`
  });
};

export const fetchUser = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  });
};
