import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginSuccess: ['user', 'tokenData'],
  loginFailure: ['message'],

  loadRequest: null,
  loadSuccess: ['user', 'tokenData'],
  loadFailure: ['message'],

  loadTokenRequest: null,
  loadTokenSuccess: ['tokenData'],
  loadTokenFailure: null,

  createPasswordRequest: ['password', 'token'],
  createPasswordSuccess: ['success'],
  createPasswordFailure: ['message'],

  logout: null
});
const authActions = { Types, Creators };

export default authActions;
