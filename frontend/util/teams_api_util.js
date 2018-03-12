export const fetchTeams = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/teams/'
  });
};
