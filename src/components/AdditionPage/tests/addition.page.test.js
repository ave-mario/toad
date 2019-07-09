import React from 'react';
import { shallow } from 'enzyme';
import Page from '../index.js';

describe('Addition page component', () => {
  const wrapper = shallow(<Page />);
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
