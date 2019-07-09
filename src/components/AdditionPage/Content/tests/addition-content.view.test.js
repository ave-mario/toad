import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AdditionContent from '../addition-content.view';
import additions from './mock-store';

describe('Addition Content view', () => {
  const load = () => {};

  // test('should open modal view after click on Edit button', () => {
  //   const mockStore = configureStore();
  //   const store = mockStore({});
  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <AdditionContent {...additions} load={load} />
  //     </Provider>
  //   );
  //   wrapper
  //     .find(`button`)
  //     .at(0)
  //     .simulate('click');
  //   wrapper.update();

  //   expect(wrapper.state('isShowModal')).toEqual(true);
  // });

  test('should must have buttons twice the number of services', () => {
    const component = mount(<AdditionContent {...additions} load={load} />);
    let buttons = component.find(`button`);
    expect(buttons.length).toBe(additions.docs.length * 2);
  });

  test('should render addition table', () => {
    const component = shallow(<AdditionContent {...additions} load={load} />);
    expect(component).toMatchSnapshot();
  });
});
