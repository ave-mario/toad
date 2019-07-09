import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import AdditionContent from '../addition-content.container.js';
import additions from './mock-store';

test('AdditionContent should render correctly', () => {
  const mockStore = configureStore();
  const store = mockStore({
    additions
  });

  const wrapper = mount(
    <Provider store={store}>
      <AdditionContent />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
