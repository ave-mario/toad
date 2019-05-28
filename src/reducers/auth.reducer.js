import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/constants';

const initialState = {
  user: localStorage.getItem('user'),
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return { user: action.payload, error: null };
    }
    case LOGIN_FAILURE: {
      return { user: null, error: action.payload };
    }
    default:
      return state;
  }
};
export default authReducer;
