export const fetchTeammates = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/users/'
  });
};
