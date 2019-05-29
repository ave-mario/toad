import { all } from 'redux-saga/effects';
import { loadFlow, loginFlow } from './auth.flow';

export default function* rootSaga() {
  yield all([loadFlow(), loginFlow()]);
}
