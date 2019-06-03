import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../components/LoginPage/view';
/* eslint-disable no-undef */
describe('Test case for testing login', () => {
  let wrapper;
  test('username check', () => {
    wrapper = shallow(<LoginPage />);
    wrapper.find('.emailInput').simulate('change', {
      target: { name: 'email', value: 'krishankantsinghal' }
    });
    expect(wrapper.state('email')).toEqual('krishankantsinghal');
  });
  it('password check', () => {
    wrapper = shallow(<LoginPage />);
    wrapper.find('.passwordInput').simulate('change', {
      target: { name: 'password', value: 'krishankant123' }
    });
    expect(wrapper.state('password')).toEqual('krishankant123');
  });
  it('login check with right data', () => {
    wrapper = shallow(<LoginPage />);
    wrapper.find('.emailInput').simulate('change', {
      target: { name: 'email', value: 'vidgf@sdf.sfn' }
    });
    wrapper.find('.passwordInput').simulate('change', {
      target: { name: 'password', value: '12345QWE' }
    });
    wrapper.find('.submitButton').simulate('click', {
      preventDefault: () => {}
    });
    expect(wrapper.state('isLogged')).toBe(true);
  });
  it('login check with wrong data', () => {
    wrapper = shallow(<LoginPage />);
    wrapper.find('.emailInput').simulate('change', {
      target: { name: 'username', value: 'krishankantsinghal' }
    });
    wrapper.find('.passwordInput').simulate('change', {
      target: { name: 'password', value: 'krishankant1234' }
    });
    wrapper.find('.submitButton').simulate('click', {
      preventDefault: () => {}
    });
    expect(wrapper.state('isLogged')).toBe(false);
  });
});
