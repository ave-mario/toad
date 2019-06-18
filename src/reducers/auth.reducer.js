import { createReducer } from 'reduxsauce';
import authActions from '../actions/auth.actions';
import services from '../services';

const { Types } = authActions;
const INITIAL_STATE = {
  isRequesting: true,
  isFailed: false,
  user: null,
  isAuthenticated: false,
  tokenData: null,
  error: false,
  createPassword: {
    success: null,
    error: null
  }
};

export const loginRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isRequesting: true,
    isFailed: false,
    error: false
  };
};
export const loginSuccess = (state = INITIAL_STATE, { user, tokenData }) => {
  return {
    ...state,
    isRequesting: false,
    user,
    isAuthenticated: true,
    tokenData,
    error: false,
    isFailed: false
  };
};
export const loginFailure = (state = INITIAL_STATE, { error }) => {
  return {
    ...state,
    isRequesting: false,
    isAuthenticated: false,
    error,
    tokenData: null,
    isFailed: true
  };
};

export const loadRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isRequesting: true,
    error: false
  };
};
export const loadSuccess = (state = INITIAL_STATE, { user, tokenData }) => {
  return {
    ...state,
    isRequesting: false,
    user,
    tokenData,
    isAuthenticated: true,
    error: false,
    isFailed: false
  };
};
export const loadFailure = (state = INITIAL_STATE, { error }) => {
  return {
    ...state,
    isRequesting: false,
    user: null,
    tokenData: null,
    isAuthenticated: false,
    error,
    isFailed: true
  };
};

export const createPasswordRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isRequesting: true,
    isFailed: false,
    error: false
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
  services.tokenDataService.removeTokenData();
  return {
    ...state,
    isRequesting: false,
    user: null,
    isAuthenticated: false,
    tokenData: null,
    error: false,
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
