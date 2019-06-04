import { createReducer } from 'reduxsauce';
import authActions from '../actions/auth.actions';

const { Types } = authActions;
const INITIAL_STATE = {
  isRequesting: false,
  user: null,
  tokens: JSON.parse(localStorage.getItem('tokens')), // ???
  error: null
};

export const loginRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isRequesting: true
  };
};
export const loginSuccess = (state = INITIAL_STATE, { user, tokens }) => {
  return {
    ...state,
    isRequesting: false,
    user,
    tokens,
    error: null
  };
};
export const loginFailure = (state = INITIAL_STATE, { error }) => {
  return {
    ...state,
    isRequesting: false,
    error
  };
};
export const loadRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isRequesting: true
  };
};
export const loadSuccess = (state = INITIAL_STATE, { user }) => {
  return {
    ...state,
    isRequesting: false,
    user,
    error: null
  };
};
export const loadFailure = (state = INITIAL_STATE, { error }) => {
  return {
    ...state,
    isRequesting: false,
    user: null,
    tokens: null,
    error
  };
};
export const logout = (state = INITIAL_STATE) => {
  localStorage.removeItem('tokens');
  return {
    ...state,
    isRequesting: false,
    user: null,
    tokens: null,
    error: null
  };
};

export const HANDLERS = {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOAD_REQUEST]: loadRequest,
  [Types.LOAD_SUCCESS]: loadSuccess,
  [Types.LOAD_FAILURE]: loadFailure,
  [Types.LOGOUT]: logout
};

const authReducer = createReducer(INITIAL_STATE, HANDLERS);

export default authReducer;
