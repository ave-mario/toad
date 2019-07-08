import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import WelcomePage from '../container';
import 'jest-styled-components';

test('WelcomePage should render correctly', () => {
  const mockStore = configureStore();
  const store = mockStore({
    router: {
      location: {
        pathname: '/welcome',
        search: '?token=token&name=name'
      }
    },
    auth: {
      isFailed: false,
      user: {},
      error: {
        message: 'message',
        success: false
      },
      createPassword: {
        success: true,
        error: null
      }
    }
  });

  const wrapper = mount(
    <Provider store={store}>
      <WelcomePage />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
