/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable require-yield */
import { put, takeLatest, all, call, take } from 'redux-saga/effects';
import getPosts from '../actions/posts.actions';
import loginFlow from './auth.flow';

function* fetchPosts() {
  const posts = yield call(getPosts);
  yield put({ type: 'POSTS_FETCHED', payload: posts });
}
function* watchFetchPosts() {
  yield takeLatest('POSTS_REQUESTED', fetchPosts);
}

export default function* rootSaga() {
  yield all([watchFetchPosts(), loginFlow()]);
}
