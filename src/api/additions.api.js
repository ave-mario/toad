import axios from 'axios';
import api from 'config/api';

const url = api.getBaseUrl();
export const addNewAddition = (data, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return axios.post(`${url}rooms-services`, data, config);
};

export const getAddition = token => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return axios.get(`${url}rooms-services`, config);
};

export const update = (id, data, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return axios.put(`${url}rooms-services/${id}`, data, config);
};

export const remove = (id, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return axios.delete(`${url}rooms-services/${id}`, config);
};
