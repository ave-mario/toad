import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import LoginPage from '../container';

it('LoginPage should render correctly', () => {
  const mockStore = configureStore();
  const store = mockStore({
    auth: {
      isFailed: false
    }
  });

  const wrapper = mount(
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
