/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable require-yield */
import { put, takeLatest, all, call, take } from 'redux-saga/effects';
import loginFlow from './auth.flow';

export default function* rootSaga() {
  yield all([loginFlow()]);
}
