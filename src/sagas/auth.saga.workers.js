import { put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { login, loadUser, createPassword } from '../actions/api.calls';
import authActions from '../actions/auth.actions';
import services from '../services';

const { Creators } = authActions;

export function* authorize(email, password) {
  try {
    const response = yield call(login, email, password);
    const { user, tokens } = response.data;
    services.tokenService.setTokens(response.data.tokens);
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
    const tokens = yield services.tokenService.getTokens();
    if (tokens === null) {
      throw new Error('There are no tokens');
    } else {
      const response = yield call(loadUser, tokens.accessToken);
      const { user } = response.data;
      yield put(Creators.loadSuccess(user));
      yield put(push('/'));
    }
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    yield put(Creators.loadFailure(errorMessage));
    yield put(push('/login'));
  }
}

export function* createNewPassword(password, token) {
  try {
    const response = yield call(createPassword, password, token);
    yield put(Creators.createPasswordSuccess(response.data.success));
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    yield put(Creators.createPasswordFailure(errorMessage));
  }
}

export function* logout() {
  yield put(Creators.logout());
  yield put(push('/login'));
}
