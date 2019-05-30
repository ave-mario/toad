import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loadUserRequest: ['payload'],
  loadUserSuccess: ['payload'],
  loadUserFailure: null
});

const loginActions = { Types, Creators };

export default loginActions;
