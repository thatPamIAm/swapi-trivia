import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header', () => {
  const mockUser = {
    user: 'Pam',
    quote: 'Your focus determines your reality.',
    ranking: 'Novice'
  }

  it('should match the snapshot', () => {
    let wrapper = shallow(<Header user={mockUser}/>);
    expect(wrapper).toMatchSnapshot();
  });
});