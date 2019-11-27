import React from 'react';
import { shallow } from 'enzyme';

import Movie from './Movie';

describe('Movie', () => {
  const movie = {
    title: 'The Phantom Menance',
    episoide_id: 1,
    release_date: '05-19-1999'
  }

  it('should match the snapshot', () => {
    let wrapper = shallow(<Movie movie={movie} />)
    expect(wrapper).toMatchSnapshot();
  });
});