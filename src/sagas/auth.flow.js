import { put, call, take, fork, cancel } from 'redux-saga/effects';
import login from '../actions/auth.actions';
import handleResponse from '../services';

function* authorize(email, password) {
  try {
    const response = yield call(login, email, password);
    const payload = handleResponse.handleLoginSuccess(response);
    yield put({ type: 'LOGIN_SUCCESS', payload });
    localStorage.setItem('user', response);
    return response;
  } catch (error) {
    const payload = handleResponse.handleLoginError(error);
    yield put({ type: 'LOGIN_FAILURE', payload });
    return error;
  }
}
export default function* loginFlow() {
  while (true) {
    const { email, password } = yield take('LOGIN_REQUEST');
    const task = yield fork(authorize, email, password);
    const action = yield take(['LOGOUT', 'LOGIN_FAILURE']);
    if (action.type === 'LOGOUT') yield cancel(task);
  }
}
