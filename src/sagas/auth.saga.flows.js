import { call, take, fork, cancel, takeLatest } from 'redux-saga/effects';
import authActions from '../actions/auth.actions';
import {
  authorize,
  load,
  createNewPassword,
  logout
} from './auth.saga.workers';

const { Types } = authActions;

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

export function* createPasswordFlow() {
  while (true) {
    const { password, token } = yield take(Types.CREATE_PASSWORD_REQUEST);
    yield call(createNewPassword, password, token);
  }
}

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
