import { put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { login, loadUser, createPassword, callWithAuth } from 'api/auth.api';
import authActions from 'actions/auth.actions';
import services from 'services';

const { Creators } = authActions;

export function* authorize(email, password) {
  try {
    const response = yield call(login, email, password);
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

    if (tokenData === null) {
      throw new Error('There are no tokens');
    } else {
      const response = yield call(callWithAuth, loadUser);
      const { user } = response.data;

      yield put(Creators.loadSuccess(user, tokenData));
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
