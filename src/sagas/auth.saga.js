import { put, call, take, fork, cancel, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { login, loadUser } from '../actions/auth.actions';
import * as Types from '../actions/types';

function* authorize(email, password) {
  try {
    const response = yield call(login, email, password);
    localStorage.setItem('tokens', JSON.stringify(response.data.tokens));
    yield put({ type: Types.LOGIN_SUCCESS, payload: response.data });
    yield put(push('/'));
    return response;
  } catch (error) {
    const payload = error.response.data;
    yield put({ type: Types.LOGIN_FAILURE, payload });
    yield put(push('/login'));
    return error;
  }
}
function* load() {
  try {
    const tokens = yield JSON.parse(localStorage.getItem('tokens'));
    if (tokens === null) {
      throw new Error('There are no tokens');
    } else {
      const response = yield call(loadUser, tokens.accessToken);
      const { user } = response.data;
      yield put({ type: Types.LOAD_USER_SUCCESS, payload: user });
      yield put(push('/'));
    }
  } catch (error) {
    yield put(push('/login'));
    if (error.response) {
      yield put({
        type: Types.LOAD_USER_FAILURE,
        payload: error.response.data
      });
    } else {
      yield put({
        type: Types.LOAD_USER_FAILURE,
        payload: error.message
      });
    }
  }
}
export function* loadFlow() {
  while (true) {
    yield takeLatest(Types.LOAD_USER_REQUEST, load);
    const action = yield take([
      Types.LOAD_USER_SUCCESS,
      Types.LOAD_USER_FAILURE
    ]);
    if (action.type === Types.LOAD_USER_SUCCESS) {
      yield take(Types.LOGOUT);
      yield put({ type: Types.LOGOUT });
      yield put(push('/login'));
    }
  }
}
export function* loginFlow() {
  while (true) {
    const { email, password } = yield take(Types.LOGIN_REQUEST);
    const task = yield fork(authorize, email, password);
    const action = yield take([Types.LOGOUT, Types.LOGIN_FAILURE]);
    if (action.type === Types.LOGOUT) {
      yield cancel(task);
      yield put(push('/login'));
    }
  }
}
