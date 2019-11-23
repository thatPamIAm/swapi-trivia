import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';

describe('Card', () => {
  const movie = {
    title: 'The Phantom Menance',
    episoide_id: 1,
    release_date: '05-19-1999'
  }

  it('should match the snapshot', () => {
    let wrapper = shallow(<Card movie={movie} />)
    expect(wrapper).toMatchSnapshot();
  });
});