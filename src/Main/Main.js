import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'; 

import Login from '../Login/Login';
import CharacterContainer from '../CharacterContainer/CharacterContainer';
import OpeningCrawl from '../OpeningCrawl/OpeningCrawl';
import MovieContainer from '../MovieContainer/MovieContainer';

class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      urls: [],
      crawl: {}
    }
    this.viewCharacters = this.viewCharacters.bind(this);
  }

  componentDidMount(){
    this.fetchMovies('https://swapi.co/api/films/');
  }

  viewCharacters(id) {
    const urls = this.findCharacterUrls(id);
    const crawl = this.findCrawlInfo(id);
    
    this.setState({
      urls,
      crawl
    });

    this.props.history.push('/movies/' + id)
  }

  findCharacterUrls(id) {
    return this.state.movies.find(movie => movie.episode_id === id)
      .characters;
  }

  findCrawlInfo(id) {
    const movie = this.state.movies.find(movie => movie.episode_id === id);

    return {
      title: movie.title,
      text: movie.opening_crawl
    }
  }

  async fetchMovies(url) {
    let data = await fetch(url);
    data = await data.json();

    data = data.results.map((result) => {
      const last = result.release_date.substring(0, 4);
      const first = result.release_date.substring(5, 10);

      result.release_date = first + '-' + last;
      return result;
    });

    data.sort((a, b) => a.episode_id - b.episode_id);

    this.setState({
      movies: data
    });
  }

  render() {
    const {logInUser} = this.props;

    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Login logInUser={logInUser} />
          </Route>
          <Route exact path="/movies">
            <MovieContainer movies={this.state.movies} viewCharacters={this.viewCharacters} />
          </Route>
          <Route path={"/movies/:" + this.state.movieId}>
            <OpeningCrawl crawl={this.state.crawl}/>
            <CharacterContainer urls={this.state.urls} />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default withRouter(Main);