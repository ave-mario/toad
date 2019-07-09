import React from 'react';
import { mount, shallow } from 'enzyme';
import Modal from '../edit-modal.formik.js';
import faker from 'faker';

describe('Edit addition modal view', () => {
  const props = {
    addition: {
      _id: '5d024a6ced7a017a7c437b44',
      name: 'Service fisrtyjgjyssdhs',
      price: 2.8
    },
    update: jest.fn(),
    close: jest.fn()
  };
  const wrapper = mount(
    <Modal
      addition={props.addition}
      update={props.update}
      close={props.close}
    />
  );
  const changeAddition = {
    name: faker.lorem.word(),
    price: faker.finance.amount()
  };
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should update an name service input when it is changed', () => {
    wrapper.find('input[name="name"]').simulate('change', {
      target: {
        name: 'name',
        value: changeAddition.name
      }
    });
    let view = wrapper.find('EditForm');
    expect(view.props().values.name).toBe(changeAddition.name);
  });

  test('should update an price service input when it is changed', () => {
    wrapper.find('input[name="price"]').simulate('change', {
      target: {
        name: 'price',
        value: changeAddition.price
      }
    });
    let view = wrapper.find('EditForm');
    expect(view.props().values.price).toBe(changeAddition.price);
  });

  test('submit have action equal update', () => {
    wrapper.find('form').simulate('click', {
      ...changeAddition
    });
    let view = wrapper.find('EditForm');
    expect(view.props().values.action).toBe('update');
  });
});
