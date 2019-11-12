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
    expect(wrapper.state().fields.user).toBe('');
    expect(wrapper.state().fields.quote).toBe('');
    expect(wrapper.state().fields.ranking).toBe('Novice');
    expect(wrapper.state().errors).toEqual({});
  });

  it('should update state with a new user when handleChange is invoked', () => {
    const mockEvent = {
      target : {
        id: "user",
        value: "thatPamIAm"
      }
    }

    expect(wrapper.state().fields.user).toBe('');

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state().fields.user).toBe('thatPamIAm');
  });

  it('should update state with a new quote when handleChange is invoked', () => {
    const mockEvent = {
      target : {
        id: "quote",
        value: "I find your lack of faith disturbing."
      }
    }

    expect(wrapper.state().fields.quote).toBe('');

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state().fields.quote).toBe('I find your lack of faith disturbing.');
  });

  it('should update state with a ranking level when handleChange is invoked', () => {
    const mockEvent = {
      target : {
        id: "ranking",
        value: "Expert"
      }
    }

    expect(wrapper.state().fields.ranking).toBe('Novice');

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state().fields.ranking).toBe('Expert');
  });

  it('should verify that a form is invalid when either the user or quote fields has no value', () => {
    let fields = {
      user: '',
      quote: 'Here is a quote'
    }

    wrapper.setState({
      fields: fields
    });

    let validation = wrapper.instance().validateForm();
    expect(validation).toBe(false);
    expect(wrapper.state().errors.user).toBe(' Please enter a username to continue.')

    fields = {
      user: 'My user name',
      quote: ''
    };

    wrapper.setState({
      fields: fields
    });

    validation = wrapper.instance().validateForm();
    expect(validation).toBe(false);
     expect(wrapper.state().errors.quote).toBe(' Please enter a Star Wars quote to continue.')
  });

  it('should update the errors object when either text field is not valid', () => {
      let fields = {
      user: '',
      quote: 'Here is a quote'
    }

    wrapper.setState({
      fields: fields
    });

    expect(wrapper.state().errors.user).toBe(undefined);
    let validation = wrapper.instance().validateForm();
    expect(wrapper.state().errors.user).toBe(' Please enter a username to continue.')

    fields = {
      user: 'My user name',
      quote: ''
    };

    wrapper.setState({
      fields: fields
    });

    expect(wrapper.state().errors.quote).toBe(undefined);
    validation = wrapper.instance().validateForm();
    expect(validation).toBe(false);
    expect(wrapper.state().errors.quote).toBe(' Please enter a Star Wars quote to continue.')

  });

  it('should verify that a form is valid when both the user and quote fields have values', () => {

    const fields = {
      user: 'My user name',
      quote: 'Here is a quote'
    };

    wrapper.setState({
      fields: fields
    });

    const validation = wrapper.instance().validateForm();
    expect(validation).toBe(true);
  });

  it('should reset the fields in state when clearFields is invoked', () => {
    const fields = {
      user: 'My user name',
      quote: 'Here is a quote'
    };

    wrapper.setState({
      fields: fields
    });

    expect(wrapper.state().fields).toEqual(fields);
    wrapper.instance().clearFields();
    expect(wrapper.state().fields).toEqual({user: '', quote: ''});
  });

  it('should invoke clearFields when a valid form is submitted', () => {
    const fields = {
      user: 'My user name',
      quote: 'Here is a quote'
    };
    const spy = jest.spyOn(wrapper.instance(), 'clearFields');


    wrapper.setState({
      fields: fields
    });

    const mockEvent = {
      preventDefault: function(){}
    }

    wrapper.instance().handleSubmit(mockEvent);
    expect(spy).toHaveBeenCalled();
  });
});