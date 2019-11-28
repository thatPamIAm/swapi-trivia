import React from 'react';
import { shallow } from 'enzyme';

import OpeningCrawl from './OpeningCrawl';

describe('OpeningCrawl', () => {
  const mockCrawl = 'Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute.'

  it('should match the snapshot', () => {
    let wrapper = shallow(<OpeningCrawl crawl={mockCrawl} />)
    expect(wrapper).toMatchSnapshot();
  });
});