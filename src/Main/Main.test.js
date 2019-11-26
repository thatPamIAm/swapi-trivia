import React from 'react';
import { shallow } from 'enzyme';

import Main from './Main';

describe('Main', () => {
  let mockLogin = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Main logInUser={mockLogin}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state().movies).toBe(null);
    expect(wrapper.state().characters).toBe(null);
  });
});