import axios from 'axios';

const url = `https://fathomless-tundra-94625.herokuapp.com//api/requests`;

export const createFoodRequest = (preference, bearerToken) =>
  axios.post(`${url}/user`, preference, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${bearerToken}`,
    },
  });

export const getUserFoodRequest = (bearerToken) =>
  axios.get(`${url}/user`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${bearerToken}`,
    },
  });
