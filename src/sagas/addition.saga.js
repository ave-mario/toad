import { takeLeading, call, put } from 'redux-saga/effects';
import { addNewAddition, getAddition, update } from 'api/additions.api';
import Actions from 'actions/addition.actions';
import Tokens from 'services/token.data.service';

const { Types, Creators } = Actions;

export function* watchSaveAddition() {
  yield takeLeading(Types.SAVE_ADDITION_REQUEST, function* saveAddition({
    name,
    price
  }) {
    try {
      const tokens = yield Tokens.getTokens();
      const response = yield call(
        addNewAddition,
        { name, price },
        tokens.accessToken
      );
      yield put(
        Creators.saveAdditionSuccess(response.data.addition, 'Success')
      );
      return response;
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : error.message;
      yield put(Creators.saveAdditionFailure(errorMessage));
      return error;
    }
  });
}

export function* loadAdditions() {
  try {
    const tokenData = yield Tokens.getTokenData();
    const response = yield call(getAddition, tokenData.tokens.accessToken);
    const { success, ...payload } = response.data;
    yield put(Creators.loadAdditionListSuccess(payload));
    return response;
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message
      : error.message;
    yield put(Creators.loadAdditionListFailure(errorMessage));
    return error;
  }
}

export function* loadAdditionsFlow() {
  yield takeLeading(Types.LOAD_ADDITION_LIST_REQUEST, loadAdditions);
}

export function* updateAddition() {
  yield takeLeading(Types.CHANGE_ADDITION_REQUEST, function* updating({
    id,
    data
  }) {
    try {
      const tokenData = yield Tokens.getTokenData();
      const response = yield call(
        update,
        id,
        data,
        tokenData.tokens.accessToken
      );
      yield put(
        Creators.changeAdditionSuccess(id, data.name, data.price, 'Success')
      );
      return response;
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : error.message;
      yield put(Creators.saveAdditionFailure(errorMessage));
      return error;
    }
  });
}
