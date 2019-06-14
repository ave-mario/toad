import React from 'react';
import { shallow, mount } from 'enzyme';
import { Welcome } from '../WelcomeForm';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Welcome form', () => {
  const mockStore = configureStore();
  const store = mockStore({
    auth: {
      isFailed: false,
      user: {},
      error: {
        message: 'message',
        success: false
      },
      createPassword: {
        success: null,
        error: null
      }
    }
  });

  const wrapper = mount(
    <Provider store={store}>
      <Welcome />
    </Provider>
  );
  test('should update an password input when it is changed', () => {
    wrapper.find('input.passwordInput').simulate('change', {
      persist: () => {},
      target: {
        name: 'password',
        value: 'abc'
      }
    });
    wrapper.update();
    let myFormInner = wrapper.find('MyFormInner');
    expect(myFormInner.props().values.password).toBe('abc');
    wrapper.update();
    myFormInner = wrapper.find('MyFormInner');
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

describe('Welcome form snaps', () => {
  test('should render login form', () => {
    const component = shallow(<Welcome />);

    expect(component).toMatchSnapshot();
  });
});
