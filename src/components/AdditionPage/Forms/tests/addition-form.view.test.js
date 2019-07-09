import React from 'react';
import { mount } from 'enzyme';
import Addition from '../addition-form.form.js';
import faker from 'faker';

describe('Form add new room service', () => {
  const handleSubmit = jest.fn();
  const wrapper = mount(<Addition saveService={handleSubmit} />);
  const newAddition = {
    name: faker.lorem.word(),
    price: faker.finance.amount()
  };
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should update an name service input when it is changed', () => {
    wrapper.find('input.nameInput').simulate('change', {
      target: {
        name: 'name',
        value: newAddition.name
      }
    });
    wrapper.update();
    let view = wrapper.find('AdditionForm');
    expect(view.props().values.name).toBe(newAddition.name);
  });

  test('should update an price service input when it is changed', () => {
    wrapper.find('input.priceInput').simulate('change', {
      target: {
        name: 'price',
        value: newAddition.price
      }
    });
    wrapper.update();
    let view = wrapper.find('AdditionForm');
    expect(view.props().values.price).toBe(newAddition.price);
  });

  // it('event triggers correctly', () => {
  //   wrapper.find('form').simulate('submit', newAddition);
  //   expect(handleSubmit).toHaveBeenCalled();
  // });
});
