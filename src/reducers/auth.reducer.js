import { createReducer } from 'reduxsauce';
import authActions from '../actions/auth.actions';

const { Types } = authActions;
const INITIAL_STATE = {
  isRequesting: false,
  isFailed: false,
  user: null,
  tokens: JSON.parse(localStorage.getItem('tokens')),
  error: null,
  createPassword: {
    success: null,
    error: null
  }
};

export const loginRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isRequesting: true,
    isFailed: false
  };
};
export const loginSuccess = (state = INITIAL_STATE, { user, tokens }) => {
  return {
    ...state,
    isRequesting: false,
    user,
    tokens,
    error: null,
    isFailed: false
  };
};
export const loginFailure = (state = INITIAL_STATE, { error }) => {
  return {
    ...state,
    isRequesting: false,
    error,
    isFailed: true
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
    error: null,
    isFailed: false
  };
};
export const loadFailure = (state = INITIAL_STATE, { error }) => {
  return {
    ...state,
    isRequesting: false,
    user: null,
    tokens: null,
    error,
    isFailed: true
  };
};
export const createPasswordRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isRequesting: true,
    isFailed: false
  };
};
export const createPasswordSuccess = (state = INITIAL_STATE, { success }) => {
  return {
    ...state,
    isRequesting: false,
    createPassword: {
      success,
      error: null
    }
  };
};
export const createPasswordFailure = (state = INITIAL_STATE, { error }) => {
  return {
    ...state,
    isRequesting: false,
    isFailed: true,
    createPassword: {
      success: null,
      error
    }
  };
};
export const logout = (state = INITIAL_STATE) => {
  localStorage.removeItem('tokens');
  return {
    ...state,
    isRequesting: false,
    user: null,
    tokens: null,
    error: null,
    isFailed: false
  };
};

export const HANDLERS = {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOAD_REQUEST]: loadRequest,
  [Types.LOAD_SUCCESS]: loadSuccess,
  [Types.LOAD_FAILURE]: loadFailure,
  [Types.CREATE_PASSWORD_REQUEST]: createPasswordRequest,
  [Types.CREATE_PASSWORD_SUCCESS]: createPasswordSuccess,
  [Types.CREATE_PASSWORD_FAILURE]: createPasswordFailure,
  [Types.LOGOUT]: logout
};

const authReducer = createReducer(INITIAL_STATE, HANDLERS);

export default authReducer;
