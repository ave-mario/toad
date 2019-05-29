import { all } from 'redux-saga/effects';
import { loadFlow, loginFlow } from './auth.saga';

export default function* rootSaga() {
  yield all([loadFlow(), loginFlow()]);
}
