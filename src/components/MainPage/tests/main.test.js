import React from 'react';
import { shallow } from 'enzyme';
import MainPage from '../view';
import 'jest-styled-components';

describe('Test case for testing main page', () => {
  test('Main page snapshot', () => {
    const props = {
      logout: () => {},
      load: () => {},
      user: {}
    };
    const component = shallow(<MainPage {...props} />);

    expect(component).toMatchSnapshot();
  });
});
