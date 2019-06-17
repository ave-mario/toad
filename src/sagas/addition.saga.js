import { take, call, put } from 'redux-saga/effects';
import { addNewAddition } from '../actions/api.calls';
import Actions from '../actions/addition.actions';
import Tokens from '../services/token.service';

export function* saveAddition(name, price) {
  try {
    const tokens = yield Tokens.getTokens().accessToken;
    const response = yield call(
      addNewAddition,
      { name, price },
      tokens.accessToken
    );
    yield put(Actions.Creators.saveAdditionSuccess());
    return response;
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    yield put(Actions.Creators.saveAdditionFailure(errorMessage));
    return error;
  }
}

export function* watchSaveAddition() {
  const { name, price } = yield take(Actions.Types.SAVE_ADDITION_REQUEST);
  yield call(saveAddition, name, price);
}
