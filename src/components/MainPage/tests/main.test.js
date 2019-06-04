import React from 'react';
import { shallow } from 'enzyme';
import MainPage from '../index';

describe('Test case for testing main page', () => {
  test('Main page snapshot', () => {
    const component = shallow(<MainPage />);

    expect(component).toMatchSnapshot();
  });
});
