import { all } from 'redux-saga/effects';
import { loadFlow, loginFlow, createPasswordFlow } from './auth.saga.flows';
import { watchSaveAddition } from './addition.saga';
import { loadFlow, loginFlow, createPasswordFlow } from './auth.saga.flows';
export default function* rootSaga() {
  yield all([
    loadFlow(),
    loginFlow(),
    watchSaveAddition()
    createPasswordFlow(),
  ]);
}
