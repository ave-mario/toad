import { loadFlow, loginFlow, load, authorize } from '../auth.saga';
import { createMockTask } from '@redux-saga/testing-utils';
import { put, call, take, fork, cancel, takeLatest } from 'redux-saga/effects';
import authActions from '../../actions/auth.actions';
import { push } from 'connected-react-router';

const { Creators, Types } = authActions;

test('load flow', () => {
  const generator = loadFlow();
  expect(generator.next().value).toEqual(takeLatest(Types.LOAD_REQUEST, load));
  expect(generator.next().value).toEqual(
    take([Types.LOAD_SUCCESS, Types.LOAD_FAILURE])
  );
  let action = {
    type: 'LOAD_SUCCESS'
  };
  expect(generator.next(action).value).toEqual(take(Types.LOGOUT));
  expect(generator.next().value).toEqual(put(Creators.logout()));
  expect(generator.next().value).toEqual(put(push('/login')));
  expect(generator.next().value).toEqual(takeLatest(Types.LOAD_REQUEST, load));
});

test('login flow', () => {
  const generator = loginFlow();
  let credentials = {
    email: 'email',
    password: 'password'
  };
  expect(generator.next(credentials).value).toEqual(take(Types.LOGIN_REQUEST));
  expect(generator.next(credentials).value).toEqual(
    fork(authorize, credentials.email, credentials.password)
  );
  const task = createMockTask();
  expect(generator.next(task).value).toEqual(
    take([Types.LOGOUT, Types.LOGIN_FAILURE])
  );
  let action = {
    type: 'LOGOUT'
  };
  expect(generator.next(action).value).toEqual(cancel(task));
  expect(generator.next().value).toEqual(put(Creators.logout()));
  expect(generator.next().value).toEqual(put(push('/login')));
  expect(generator.next(credentials).value).toEqual(take(Types.LOGIN_REQUEST));
});
