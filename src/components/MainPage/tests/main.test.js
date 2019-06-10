import React from 'react';
import { shallow } from 'enzyme';
import MainPage from '../view';

describe('Test case for testing main page', () => {
  test('Main page snapshot', () => {
    const props = {
      logout: () => {},
      load: () => {}
    };
    const component = shallow(<MainPage {...props} />);

    expect(component).toMatchSnapshot();
  });
});
