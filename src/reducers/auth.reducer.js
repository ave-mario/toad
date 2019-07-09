import { createReducer } from 'reduxsauce';
import authActions from 'actions/auth.actions';
import services from 'services';

const { Types } = authActions;
const INITIAL_STATE = {
  isRequesting: false,
  isFailed: false,
  isAuthenticated: false,
  user: null,
  tokenData: null,
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
export const loginSuccess = (state = INITIAL_STATE, { user, tokenData }) => {
  return {
    ...state,
    isRequesting: false,
    user,
    isAuthenticated: true,
    tokenData,
    isFailed: false
  };
};
export const loginFailure = (state = INITIAL_STATE) => {
  return {
    ...state,
    isRequesting: false,
    isAuthenticated: false,
    tokenData: null,
    isFailed: true
  };
};

export const loadRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isRequesting: true
  };
};
export const loadSuccess = (state = INITIAL_STATE, { user, tokenData }) => {
  return {
    ...state,
    isRequesting: false,
    user,
    tokenData,
    isAuthenticated: true,
    isFailed: false
  };
};
export const loadFailure = (state = INITIAL_STATE) => {
  return {
    ...state,
    isRequesting: false,
    user: null,
    tokenData: null,
    isAuthenticated: false,
    isFailed: true
  };
};

export const loadTokenRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isRequesting: true
  };
};
export const loadTokenSuccess = (state = INITIAL_STATE, { tokenData }) => {
  return {
    ...state,
    isRequesting: false,
    tokenData,
    isAuthenticated: true,
    isFailed: false
  };
};
export const loadTokenFailure = (state = INITIAL_STATE) => {
  return {
    ...state,
    isRequesting: false,
    user: null,
    tokenData: null,
    isAuthenticated: false,
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
  services.tokenDataService.removeTokenData();
  return {
    ...state,
    isRequesting: false,
    user: null,
    isAuthenticated: false,
    tokenData: null,
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

  [Types.LOAD_TOKEN_REQUEST]: loadTokenRequest,
  [Types.LOAD_TOKEN_SUCCESS]: loadTokenSuccess,
  [Types.LOAD_TOKEN_FAILURE]: loadTokenFailure,

  [Types.CREATE_PASSWORD_REQUEST]: createPasswordRequest,
  [Types.CREATE_PASSWORD_SUCCESS]: createPasswordSuccess,
  [Types.CREATE_PASSWORD_FAILURE]: createPasswordFailure,

  [Types.LOGOUT]: logout
};

const authReducer = createReducer(INITIAL_STATE, HANDLERS);

export default authReducer;
