import React from 'react';
import { shallow } from 'enzyme';

import CharacterContainer from './CharacterContainer';

describe('CharacterContainer', () => {
  let wrapper;
  const mockUrls = ['https://swapi.co/api/people/2/',
                    'https://swapi.co/api/people/3/',
                    'https://swapi.co/api/people/10/'
                  ];

  beforeEach(() => {
    wrapper = shallow(<CharacterContainer urls={mockUrls} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should hae a default state', () => {
    expect(wrapper.state().characters).toEqual([]);
  }); 
});