import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  let wrapper;
  const historyMock = { push: jest.fn() };

  beforeEach(() => {
    wrapper = shallow(<App.WrappedComponent history={historyMock} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should have a default state', () => {

    expect(wrapper.state().userInfo).toBe(null);
  });

  it('should update a user\'s info when logInUser is invoked', () => {
    const user = {
      fields: {
        user: 'Darth Vader',
        quote: 'I think, therefore I am',
        ranking: 'Expert'
      }
    }

    expect(wrapper.state().userInfo).toBe(null);
    wrapper.instance().logInUser(user);
    expect(wrapper.state().userInfo).toBe(user);
  });
});
