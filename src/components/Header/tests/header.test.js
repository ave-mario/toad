import React from 'react';
import { mount } from 'enzyme';
import Header from '../index.js';

describe('Header component', () => {
  const props = {
    title: 'Rooms'
  };
  const wrapper = mount(<Header {...props} />);
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
