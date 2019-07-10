import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import ErrorBar from '../container';
import 'jest-styled-components';

test('ErrorBar should render correctly', () => {
  const mockStore = configureStore();
  const store = mockStore({
    auth: {
      isFailed: false,
      user: {}
    },
    error: { message: '' }
  });

  const wrapper = mount(
    <Provider store={store}>
      <ErrorBar />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
