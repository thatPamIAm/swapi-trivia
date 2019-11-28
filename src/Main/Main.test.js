import React from 'react';
import { shallow } from 'enzyme';

import Main from './Main';

describe('Main', () => {
  let mockLogin = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Main.WrappedComponent logInUser={mockLogin}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state().movies).toEqual([]);
    expect(wrapper.state().urls).toEqual([]);
    expect(wrapper.state().crawl).toEqual({});
  });
});