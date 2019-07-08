import React from 'react';
import { shallow, mount } from 'enzyme';
import { Login } from '../LoginForm';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import 'jest-styled-components';

describe('Login form', () => {
  const mockStore = configureStore();
  const store = mockStore({
    auth: {
      isFailed: false,
      user: {},
      error: {
        message: 'message',
        success: false
      }
    }
  });

  const wrapper = mount(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  test('should update an email input when it is changed', () => {
    wrapper.find('input.emailInput').simulate('change', {
      persist: () => {},
      target: {
        name: 'email',
        value: 'abc'
      }
    });
    wrapper.update();
    let myFormInner = wrapper.find('MyFormInner');
    expect(myFormInner.props().values.email).toBe('abc');
    wrapper.update();
    myFormInner = wrapper.find('MyFormInner');
  });
  test('should update an password input when it is changed', () => {
    wrapper.find('input.passwordInput').simulate('change', {
      persist: () => {},
      target: {
        name: 'password',
        value: '123'
      }
    });
    wrapper.update();
    let myFormInner = wrapper.find('MyFormInner');
    expect(myFormInner.props().values.password).toBe('123');
  });
  test('submit', () => {
    let prevented = false;
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {
        prevented = true;
      }
    });
    expect(prevented).toBe(true);
  });
});

describe('Login form snaps', () => {
  test('should render login form', () => {
    const component = shallow(<Login />);

    expect(component).toMatchSnapshot();
  });
});
