import axios from 'axios';

export function login(email, password) {
  const config = {
    headers: { 'Content-Type': 'application/json' }
  };
  const body = {
    email,
    password
  };
  return axios.post('employees/login', body, config);
}
export function loadUser(token) {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return axios.get('employees/current', config);
}
