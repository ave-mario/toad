import { all } from 'redux-saga/effects';
import { loadFlow, loginFlow, createPasswordFlow } from './auth.saga.flows';
import {
  watchSaveAddition,
  loadAdditions,
  updateAddition
} from './addition.saga';

export default function* rootSaga() {
  yield all([
    loadFlow(),
    loginFlow(),
    createPasswordFlow(),
    watchSaveAddition(),
    loadAdditions(),
    updateAddition()
  ]);
}
