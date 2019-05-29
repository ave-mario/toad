import * as Types from '../actions/types';

const initialState = {
  user: null,
  tokens: JSON.parse(localStorage.getItem('tokens')), // ???
  error: null
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.LOGIN_SUCCESS: {
      return { user: payload.user, tokens: payload.tokens, error: null };
    }
    case Types.LOAD_USER_SUCCESS: {
      return {
        user: payload,
        tokens: JSON.parse(localStorage.getItem('tokens')),
        error: null
      };
    }
    case Types.LOAD_USER_FAILURE:
    case Types.LOGIN_FAILURE: {
      return { user: null, tokens: null, error: payload };
    }
    case Types.LOGOUT: {
      localStorage.removeItem('tokens');
      return { user: null, tokens: null, error: null };
    }
    default:
      return state;
  }
};
export default authReducer;
