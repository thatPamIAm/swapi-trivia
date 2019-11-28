import React from 'react';
import { shallow } from 'enzyme';

import Main from './Main';

describe('Main', () => {
  let mockLogin = jest.fn();
  let wrapper;
  let mockMovies = [
    {
      title:'The Phantom Menace', 
      episode_id: 1, 
      release_date: '05-19-1999', 
      characters: ['https://swapi.co/api/people/2/', 'https://swapi.co/api/people/3/'],
      opening_crawl: "This is the opening crawl for movie 1"
    },
    {
      title:'Attack of the Clones', 
      episode_id: 2, 
      release_date: '05-16-2002', 
      characters: ['https://swapi.co/api/people/1/', 'https://swapi.co/api/people/2/'],
      opening_crawl: "This is the opening crawl for movie 2"
    },
    {
      title: 'Revenge of the Sith',
      episode_id: 3,
      release_date: '05-19-2005',
      characters: ['https://swapi.co/api/people/2/', 'https://swapi.co/api/people/3/'],
      opening_crawl: "This is the opening crawl for movie 3"
    }
  ];

  beforeEach(() => {
    wrapper = shallow(<Main.WrappedComponent logInUser={mockLogin}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state().movies).toEqual([]);
    expect(wrapper.state().urls).toEqual([]);
    expect(wrapper.state().crawl).toEqual({});
  });

  it('should find the matching character urls for a movie ', () => {

    wrapper.instance().setState({
      movies: mockMovies
    });

    const urls = wrapper.instance().findCharacterUrls(2);

    expect(urls).toEqual(mockMovies[1].characters);
  });

  it('should find the crawling text for a movie when findCrawlInfo is invoked', () => {

    wrapper.instance().setState({
      movies: mockMovies
    });

    const crawlInfo = wrapper.instance().findCrawlInfo(1);
    expect(crawlInfo).toEqual({title: mockMovies[0].title, text: mockMovies[0].opening_crawl });
  });
});