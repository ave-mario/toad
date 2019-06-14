import { take, fork, call, put } from 'redux-saga/effects';
import { addNewAddition } from '../actions/api.calls';
import Actions from '../actions/addition.actions';

export function* saveAddition(name, price) {
  try {
    const response = yield call(addNewAddition, { name, price });
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
  yield fork(saveAddition, name, price);
}
