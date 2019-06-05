import React from 'react';
import { shallow, mount } from 'enzyme';
import faker from 'faker';
import { fakeValidEmail, fakeValidPassword } from '../view';
import { Login } from '../LoginForm';
const randomEmail = faker.internet.email;
const randomPassword = faker.internet.password;

describe('Login form', () => {
  const wrapper = mount(<Login />);
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
