import React from 'react';
import { shallow, mount } from 'enzyme';
import NotFoundPage from '../view';

describe('Test case for testing NotFound page', () => {
  test('NotFound page snapshot', () => {
    const props = {
      goBack: () => {}
    };
    const component = shallow(<NotFoundPage {...props} />);

    expect(component).toMatchSnapshot();
  });
  test('should call go back on button click', () => {
    const mockGoBack = jest.fn();
    const props = {
      goBack: mockGoBack
    };
    const component = mount(<NotFoundPage {...props} />);

    component.find('button.goBackButton').simulate('click');
    expect(mockGoBack).toHaveBeenCalled();
  });
});
