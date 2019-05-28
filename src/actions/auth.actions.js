import axios from 'axios';

export default function login(email, password) {
  const config = {
    headers: { 'Content-Type': 'application/json' }
  };
  const body = {
    email,
    password
  };
  return axios.post('http://localhost:3001/api/employees/login', body, config);
}
