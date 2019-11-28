import React from 'react';
import { shallow } from 'enzyme';

import MovieContainer from './MovieContainer';

describe('Movies', () => {
  let wrapper;
  let mockMovies = [
    {title:'The Phantom Menace', episode_id: 1, release_date: "05-19-1999"},
    {title:'Attack of the Clones', episode_id: 2, release_date: "05-16-2002"},
    {title:'Revenge of the Sith', episode_id: 3, release_date: "05-19-2005"},
  ];

  beforeEach(() => {
    wrapper = shallow(<MovieContainer movies={mockMovies} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});