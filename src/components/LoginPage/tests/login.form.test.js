import React from 'react';
import { shallow } from 'enzyme';
import faker from 'faker';
import LoginPage, { fakeValidEmail, fakeValidPassword } from '../view';

const randomEmail = faker.internet.email;
const randomPassword = faker.internet.password;
describe('Test case for testing login form', () => {
  let wrapper;
  const props = {
    login: jest.fn()
  };

  test('email check', () => {
    wrapper = shallow(<LoginPage {...props} />);
    wrapper.find('.emailInput').simulate('change', {
      target: { name: 'email', value: randomEmail }
    });

    expect(wrapper.state('email')).toEqual(randomEmail);
  });

  test('password check', () => {
    wrapper = shallow(<LoginPage {...props} />);
    wrapper.find('.passwordInput').simulate('change', {
      target: { name: 'password', value: randomPassword }
    });

    expect(wrapper.state('password')).toEqual(randomPassword);
  });

  test('login check with right data', () => {
    wrapper = shallow(<LoginPage {...props} />);

    wrapper.find('.emailInput').simulate('change', {
      target: { name: 'email', value: fakeValidEmail }
    });
    wrapper.find('.passwordInput').simulate('change', {
      target: { name: 'password', value: fakeValidPassword }
    });
    wrapper.find('.submitButton').simulate('click', {
      preventDefault: () => {}
    });

    expect(props.login).toBeCalled();
    expect(wrapper.state('isLogged')).toBe(true);
  });

  test('login check with wrong data', () => {
    wrapper = shallow(<LoginPage {...props} />);

    wrapper.find('.emailInput').simulate('change', {
      target: { name: 'username', value: randomEmail }
    });
    wrapper.find('.passwordInput').simulate('change', {
      target: { name: 'password', value: randomPassword }
    });
    wrapper.find('.submitButton').simulate('click', {
      preventDefault: () => {}
    });

    expect(props.login).toBeCalled();
    expect(wrapper.state('isLogged')).toBe(false);
  });
  test('Login page snapshot', () => {
    const component = shallow(<LoginPage {...props} />);

    expect(component).toMatchSnapshot();
  });
});
