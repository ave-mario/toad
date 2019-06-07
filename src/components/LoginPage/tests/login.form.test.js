import React from 'react';
import { shallow } from 'enzyme';
import faker from 'faker';
import { fakeValidEmail, fakeValidPassword } from '../view';
import Login from '../Login';
const randomEmail = faker.internet.email;
const randomPassword = faker.internet.password;

describe('Test case for testing login form', () => {
  let wrapper;
  const props = {
    login: jest.fn(),
    errors: {},
    values: { email: '', password: '' }
  };

  test.only('email check', () => {
    wrapper = shallow(<Login {...props} />);
    wrapper.find('.emailInput').simulate('change', {
      target: { name: 'email', value: randomEmail }
    });
    console.log(props.values.email);
    expect(props.values.email).to.equal(randomEmail);
  });

  test('password check', () => {
    wrapper = shallow(<Login {...props} />);
    wrapper.find('.passwordInput').simulate('change', {
      target: { name: 'password', value: randomPassword }
    });

    expect(wrapper.values('password')).toEqual(randomPassword);
  });

  test('login check with right data', () => {
    wrapper = shallow(<Login {...props} />);
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
    wrapper = shallow(<Login {...props} />);

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
  test('should render login form', () => {
    const component = shallow(<Login {...props} />);

    expect(component).toMatchSnapshot();
  });
});
