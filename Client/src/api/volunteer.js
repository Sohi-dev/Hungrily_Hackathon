import axios from 'axios';

const url = `https://fathomless-tundra-94625.herokuapp.com/api/requests`;

export const getRecievedFoodRequests = (bearerToken) =>
  axios.get(`${url}/volunteer`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${bearerToken}`,
    },
  });
