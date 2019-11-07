import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state().user).toBe('');
    expect(wrapper.state().favoriteQuote).toBe('');
    expect(wrapper.state().ranking).toBe('Novice');
  });

  it('should update state with a new user when handleChange is invoked', () => {
    const mockEvent = {
      target : {
        name: "user",
        value: "thatPamIAm"
      }
    }

    expect(wrapper.state().user).toBe('');

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state().user).toBe('thatPamIAm');
  });

  it('should update state with a new quote when handleChange is invoked', () => {
    const mockEvent = {
      target : {
        name: "favoriteQuote",
        value: "I find your lack of faith disturbing."
      }
    }

    expect(wrapper.state().favoriteQuote).toBe('');

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state().favoriteQuote).toBe('I find your lack of faith disturbing.');
  });

  it('should update state with a ranking level when handleChange is invoked', () => {
    const mockEvent = {
      target : {
        name: "ranking",
        value: "Expert"
      }
    }

    expect(wrapper.state().ranking).toBe('Novice');

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state().ranking).toBe('Expert');
  });
});