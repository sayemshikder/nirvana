export const fetchTeammates = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/users/'
  });
};
//
// export const fetchCurrentTeammates = (userId, teamId) => {
//   return $.ajax({
//     method: 'GET',
//     url: `/api/users/${teamId}`
//   });
// };
