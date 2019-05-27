import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/constants';

const initialState = {
  user: localStorage.getItem('user'),
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return { ...state, user: action.payload.user };
    }
    case LOGIN_FAILURE: {
      return { ...state, error: action.payload.error };
    }
    default:
      return state;
  }
};
export default authReducer;
