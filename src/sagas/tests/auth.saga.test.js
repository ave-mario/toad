import { loadFlow, loginFlow } from '../auth.saga.flows';
import { load, authorize, logout } from '../auth.saga.workers';
import { createMockTask } from '@redux-saga/testing-utils';
import { call, take, fork, cancel, takeLatest } from 'redux-saga/effects';
import authActions from '../../actions/auth.actions';

const { Types } = authActions;

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
  expect(generator.next().value).toEqual(call(logout));
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
  expect(generator.next().value).toEqual(call(logout));
});
