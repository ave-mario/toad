import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginSuccess: ['user', 'tokens'],
  loginFailure: ['error'],
  loadRequest: null,
  loadSuccess: ['user'],
  loadFailure: ['error'],
  logout: null
});
const authActions = { Types, Creators };

export default authActions;
