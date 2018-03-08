export const fetchSpecificUsers = (userIdArray) => {
  $.ajax({
    method: 'GET',
    url: '/api/users'
  });
};
