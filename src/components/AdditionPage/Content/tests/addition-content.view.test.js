import React from 'react';
import { shallow, mount } from 'enzyme';
import AdditionContent from '../addition-content.view';
import additions from './mock-store';

describe('Addition Content view', () => {
  const props = {
    load: jest.fn(),
    remove: jest.fn(),
    update: jest.fn(),
    ...additions
  };

  const wrapper = shallow(<AdditionContent {...props} />).dive();

  test('should open edit modal view after click on Edit button', () => {
    const wrapper = shallow(<AdditionContent {...props} />).dive();

    expect(wrapper.state().isShowModalEdit).toEqual(false);
    console.log({ buttons: wrapper.find('.edit') });
    wrapper
      .find(`.edit`)
      .at(0)
      .simulate('click');

    expect(wrapper.state().isShowModalEdit).toEqual(true);
    expect(wrapper.state().isShowModalRemove).toEqual(false);
    expect(wrapper.state().addition).toEqual(additions.docs[0]);
    wrapper.unmount();
  });

  test('should open delete modal view after click on Delete button', () => {
    expect(wrapper.state().isShowModalRemove).toEqual(false);

    wrapper
      .find(`.delete`)
      .at(0)
      .simulate('click');

    expect(wrapper.state().isShowModalRemove).toEqual(true);
    expect(wrapper.state().isShowModalEdit).toEqual(false);
    expect(wrapper.state().addition).toEqual(additions.docs[0]);
    wrapper.unmount();
  });

  test('should must have buttons twice the number of services', () => {
    const component = mount(<AdditionContent {...props} />);
    let buttons = component.find(`button`);
    expect(buttons.length).toBe(additions.docs.length * 2);
  });

  test('should render addition table', () => {
    const component = shallow(<AdditionContent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
