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

export const update = (id, data, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return axios.put(`rooms-services/${id}`, data, config);
};
