import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from '../App';

describe('App:', () => {
  it('renders without crahing', () => {
    shallow(<App />);
  });
});
