import { put, call, take, fork, cancel } from 'redux-saga/effects';
import login from '../actions/auth.actions';

function* authorize(email, password) {
  try {
    const user = yield call(login, email, password);
    yield put({ type: 'LOGIN_SUCCESS', payload: { user } });
    localStorage.setItem(user);
    return user;
  } catch (error) {
    yield put({ type: 'LOGIN_FAILURE', payload: { error } });
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
