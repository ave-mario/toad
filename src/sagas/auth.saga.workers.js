import { put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  login,
  loadUser,
  createPassword,
  callWithAuth,
  wrapper
} from 'api/auth.api';
import authActions from 'actions/auth.actions';
import services from 'services';

const { Creators } = authActions;

export function* authorize(email, password) {
  try {
    const response = yield call(wrapper, login, email, password);
    if (response.error) throw new Error(response.error);
    const { user, tokenData } = response.data;

    services.tokenDataService.setTokenData(tokenData);

    yield put(Creators.loginSuccess(user, tokenData));

    return response;
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message
      : error.message;

    yield put(Creators.loginFailure(errorMessage));

    return error;
  }
}

export function* load() {
  try {
    const tokenData = yield services.tokenDataService.getTokenData();
    if (tokenData) {
      yield put(Creators.loadTokenSuccess(tokenData));
      const response = yield call(wrapper, callWithAuth, loadUser);
      if (response.error) throw new Error(response.error);
      const { user } = response.data;

      yield put(Creators.loadSuccess(user, tokenData));
    } else if (tokenData === null) {
      throw new Error('There are no tokens');
    }
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message
      : error.message;

    yield put(Creators.loadFailure(errorMessage));
  }
}

export function* createNewPassword(password, token) {
  try {
    const response = yield call(createPassword, password, token);

    yield put(Creators.createPasswordSuccess(response.data.success));
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message
      : error.message;

    yield put(Creators.createPasswordFailure(errorMessage));
  }
}

export function* logout() {
  yield put(Creators.logout());
  yield put(push('/login'));
}
