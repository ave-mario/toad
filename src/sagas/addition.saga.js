/* eslint-disable func-names */
import { takeLeading, call, put } from 'redux-saga/effects';
import { addNewAddition, getAddition, update } from '../api/additions.api';
import Actions from '../actions/addition.actions';
import Tokens from '../services/token.service';

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
      yield put(Creators.saveAdditionSuccess());
      return response;
    } catch (error) {
      const errorMessage = error.response ? error.response.data : error.message;
      yield put(Creators.saveAdditionFailure(errorMessage));
      return error;
    }
  });
}

export function* loadAdditions() {
  yield takeLeading(Types.LOAD_ADDITION_LIST_REQUEST, function* load() {
    try {
      const tokens = yield Tokens.getTokens();
      const response = yield call(getAddition, tokens.accessToken);
      const { success, ...payload } = response.data;
      yield put(Creators.loadAdditionListSuccess(payload));
      return response;
    } catch (error) {
      const errorMessage = error.response ? error.response.data : error.message;
      yield put(Creators.loadAdditionListFailure(errorMessage));
      return error;
    }
  });
}

export function* updateAddition() {
  yield takeLeading(Types.CHANGE_ADDITION_REQUEST, function*({ id, data }) {
    try {
      const tokens = yield Tokens.getTokens();
      const response = yield call(update, id, data, tokens.accessToken);
      yield put(Creators.changeAdditionSuccess());
      return response;
    } catch (error) {
      const errorMessage = error.response ? error.response.data : error.message;
      yield put(Creators.saveAdditionFailure(errorMessage));
      return error;
    }
  });
}
