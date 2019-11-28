import React from 'react';
import { shallow } from 'enzyme';

import Character from './Character';

describe('Character', () => {
  const mockCharacter = {
    name: 'C-3PO',
    homeworld: 'https://swapi.co/api/planets/1/',
    species:'https://swapi.co/api/species/2/',
    films: ['https://swapi.co/api/films/2/']
  }
  
  const mockIndex = 0;

  it('should match the snapshot', () => {
    let wrapper = shallow(<Character character={mockCharacter} key={mockIndex} />)
    expect(wrapper).toMatchSnapshot();
  });
});