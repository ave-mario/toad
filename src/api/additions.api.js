import axios from 'axios';

export const addNewAddition = (data, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return axios.post('rooms-services', data, config);
};

export const getAddition = token => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return axios.get('rooms-services', config);
};
