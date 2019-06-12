import authReducer from '../auth.reducer';
import authActions from '../../actions/auth.actions';

const { Types } = authActions;
describe('Auth reducer test', () => {
  test('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual({
      isRequesting: false,
      isFailed: false,
      user: null,
      tokens: {},
      error: null,
      createPassword: {
        success: null,
        error: null
      }
    });
  });
  test('should handle LOGIN_REQUEST', () => {
    const action = {
      type: Types.LOGIN_REQUEST
    };
    expect(authReducer({}, action)).toEqual({
      isRequesting: true,
      isFailed: false,
      error: null
    });
  });
  test('should handle LOGIN_SUCCESS', () => {
    const action = {
      type: Types.LOGIN_SUCCESS,
      user: 'user',
      tokens: 'tokens'
    };
    expect(authReducer({}, action)).toEqual({
      isRequesting: false,
      user: 'user',
      tokens: 'tokens',
      error: null,
      isFailed: false
    });
  });
  test('should handle LOGIN_FAILURE', () => {
    const action = {
      type: Types.LOGIN_FAILURE,
      error: 'error'
    };
    expect(authReducer({}, action)).toEqual({
      isRequesting: false,
      error: 'error',
      isFailed: true
    });
  });
  test('should handle LOAD_REQUEST', () => {
    const action = {
      type: Types.LOAD_REQUEST
    };
    expect(authReducer({}, action)).toEqual({
      error: null,
      isRequesting: true,
      error: null
    });
  });
  test('should handle LOAD_SUCCESS', () => {
    const action = {
      type: Types.LOAD_SUCCESS,
      user: 'user'
    };
    expect(authReducer({}, action)).toEqual({
      isRequesting: false,
      user: 'user',
      error: null,
      isFailed: false
    });
  });
  test('should handle LOAD_FAILURE', () => {
    const action = {
      type: Types.LOAD_FAILURE,
      error: 'error'
    };
    expect(authReducer({}, action)).toEqual({
      isRequesting: false,
      user: null,
      tokens: null,
      error: 'error',
      isFailed: true
    });
  });
  test('should handle CREATE_PASSWORD_REQUEST', () => {
    const action = {
      type: Types.CREATE_PASSWORD_REQUEST
    };
    expect(authReducer({}, action)).toEqual({
      isRequesting: true,
      isFailed: false,
      error: null
    });
  });
  test('should handle CREATE_PASSWORD_SUCCESS', () => {
    const action = {
      type: Types.CREATE_PASSWORD_SUCCESS,
      success: 'success'
    };
    expect(authReducer({}, action)).toEqual({
      isRequesting: false,
      createPassword: {
        success: 'success',
        error: null
      }
    });
  });
  test('should handle CREATE_PASSWORD_FAILURE', () => {
    const action = {
      type: Types.CREATE_PASSWORD_FAILURE,
      error: 'error'
    };
    expect(authReducer({}, action)).toEqual({
      isRequesting: false,
      isFailed: true,
      createPassword: {
        success: null,
        error: 'error'
      }
    });
  });
  test('should handle LOGOUT', () => {
    const action = {
      type: Types.LOGOUT
    };
    expect(authReducer({}, action)).toEqual({
      isRequesting: false,
      user: null,
      tokens: null,
      error: null,
      isFailed: false
    });
  });
});
