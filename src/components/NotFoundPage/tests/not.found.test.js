import React from 'react';
import { shallow, mount } from 'enzyme';
import NotFoundPage from '../';
import 'jest-styled-components';

describe('Test case for testing NotFound page', () => {
  test('NotFound page snapshot', () => {
    const component = shallow(<NotFoundPage />);

    expect(component).toMatchSnapshot();
  });
  test('should call go back on button click', () => {
    const component = mount(<NotFoundPage />);
    component.instance().handleClick = jest.fn();
    expect(component.instance().handleClick).not.toHaveBeenCalled();
    component.instance().forceUpdate();
    component.find('button.goBackButton').simulate('click');
    expect(component.instance().handleClick).toHaveBeenCalledTimes(1);
  });
});
