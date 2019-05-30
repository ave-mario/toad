import { createReducer } from 'reduxsauce';
import Actions from '../actions/test.actions';

const { Types } = Actions;
const INITIAL_STATE = {
  isRequesting: false,
  user: null,
  tokens: JSON.parse(localStorage.getItem('tokens')), // ???
  error: null
};

export const request = (state = INITIAL_STATE) => {
  return {
    ...state,
    isRequesting: true
  };
};

export const success = (state = INITIAL_STATE) => {
  return {
    ...state,
    isRequesting: true
  };
};

export const failure = (state = INITIAL_STATE) => {
  return state;
};

export const HANDLERS = {
  [Types.LOAD_USER_REQUEST]: request,
  [Types.LOAD_USER_SUCCESS]: success,
  [Types.LOAD_USER_FAILURE]: failure
};

const testReducer = createReducer(INITIAL_STATE, HANDLERS);

export default testReducer;
