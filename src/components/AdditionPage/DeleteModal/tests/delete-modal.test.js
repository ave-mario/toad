import React from 'react';
import { mount } from 'enzyme';
import Modal from '../';

describe('Remove addition modal view', () => {
  const props = {
    addition: {
      _id: '5d024a6ced7a017a7c437b44',
      name: 'Fridge',
      price: 2.8
    },
    remove: jest.fn(),
    close: jest.fn()
  };
  const wrapper = mount(<Modal {...props} />);

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly name and price addition', () => {
    const name = wrapper.find('p.addition-name');
    const price = wrapper.find('p.addition-price');
    expect(name.text()).toEqual(props.addition.name);
    expect(price.text()).toEqual(props.addition.price.toString());
  });
});
