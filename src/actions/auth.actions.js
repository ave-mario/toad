import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginSuccess: ['user', 'tokenData'],
  loginFailure: ['error'],

  loadRequest: null,
  loadSuccess: ['user', 'tokenData'],
  loadFailure: ['error'],

  createPasswordRequest: ['password', 'token'],
  createPasswordSuccess: ['success'],
  createPasswordFailure: ['error'],

  logout: null
});
const authActions = { Types, Creators };

export default authActions;
