import React from 'react';
import { shallow } from 'enzyme';

import Main from './Main';

describe('Main', () => {
  let mockLogin = jest.fn();

  it('should match the snapshot', () => {
    let wrapper = shallow(<Main logInUser={mockLogin}/>);
    
    expect(wrapper).toMatchSnapshot();
  });
});