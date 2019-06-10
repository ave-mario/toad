import { put, call, take, fork, cancel, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { login, loadUser } from '../actions/api.calls';
import authActions from '../actions/auth.actions';

const { Creators, Types } = authActions;
export function* authorize(email, password) {
  try {
    const response = yield call(login, email, password);
    const { user, tokens } = response.data;
    localStorage.setItem('tokens', JSON.stringify(response.data.tokens));
    yield put(Creators.loginSuccess(user, tokens));
    yield put(push('/'));
    return response;
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    yield put(Creators.loginFailure(errorMessage));
    return error;
  }
}
export function* load() {
  try {
    const tokens = yield JSON.parse(localStorage.getItem('tokens'));
    if (tokens === null) {
      throw new Error('There are no tokens');
    } else {
      const response = yield call(loadUser, tokens.accessToken);
      const { user } = response.data;
      yield put(Creators.loadSuccess(user));
      yield put(push('/'));
    }
  } catch (error) {
    yield put(push('/login'));
    if (error.response) {
      yield put(Creators.loadFailure(error.response.data));
    } else {
      yield put(Creators.loadFailure(error.message));
    }
  }
}
export function* logout() {
  yield put(Creators.logout());
  yield put(push('/login'));
}
export function* loadFlow() {
  while (true) {
    yield takeLatest(Types.LOAD_REQUEST, load);
    const action = yield take([Types.LOAD_SUCCESS, Types.LOAD_FAILURE]);
    if (action.type === Types.LOAD_SUCCESS) {
      yield take(Types.LOGOUT);
      yield call(logout);
    }
  }
}
// export function* welcomeFlow() {
//   while (true) {}
// }
export function* loginFlow() {
  while (true) {
    const { email, password } = yield take(Types.LOGIN_REQUEST);
    const task = yield fork(authorize, email, password);
    const action = yield take([Types.LOGOUT, Types.LOGIN_FAILURE]);
    if (action.type === Types.LOGOUT) {
      yield cancel(task);
      yield call(logout);
    }
  }
}
