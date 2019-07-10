import axios from 'axios';
import services from 'services';
import api from 'config/api';

const url = api.getBaseUrl();

export function login(args) {
  const [email, password] = args;
  const config = {
    headers: { 'Content-Type': 'application/json' }
  };
  const body = {
    email,
    password
  };
  return axios.post(`${url}employees/login`, body, config);
}

export function loadUser(token) {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return axios.get(`${url}employees/current`, config);
}

export function refreshToken(token) {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return axios.post(`${url}auth/refresh-tokens`, {}, config);
}

export function createPassword(newPassword, token) {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  const body = {
    newPassword
  };
  return axios.put(`${url}employees/password`, body, config);
}

export async function callWithAuth(args) {
  const func = args[0];
  const tokenData = await services.tokenDataService.getTokenData();
  let newTokenData = tokenData;

  if (!tokenData) throw new Error('There are no tokens');

  if (Date.now() >= tokenData.access_expires_in) {
    const { data } = await refreshToken(tokenData.tokens.refreshToken);

    newTokenData = data.tokenData;
    services.tokenDataService.setTokenData(newTokenData);
  }
  return func(newTokenData.tokens.accessToken);
}

export async function wrapper(func, ...args) {
  let attempts = 3;
  let response = {};

  while (attempts > 0) {
    try {
      response = await func(args);
      if (response) return response;
    } catch (e) {
      response.error = e.response ? e.response.data.message : 'Network error';
      if (!e.response || e.response.status === 500) {
        attempts -= 1;
      } else {
        attempts = 0;
      }
    }
  }

  return response;
}
