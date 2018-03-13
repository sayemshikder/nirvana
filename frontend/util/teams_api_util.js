export const fetchTeams = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/teams/'
  });
};

export const fetchTeam = (teamId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/teams/${teamId}`
  });
};
