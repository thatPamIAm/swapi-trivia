import React from 'react';
import { shallow } from 'enzyme';

import Movies from './Movies';

describe('Movies', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Movies />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state().movies).toBe(null);
  });
});