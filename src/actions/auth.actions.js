import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginSuccess: ['user', 'tokens'],
  loginFailure: ['error'],
  loadRequest: null,
  getNewTokensRequest: ['tokens'],
  loadSuccess: ['user'],
  loadFailure: ['error'],
  createPasswordRequest: ['password', 'token'],
  createPasswordSuccess: ['success'],
  createPasswordFailure: ['error'],
  logout: null
});
const authActions = { Types, Creators };

export default authActions;
