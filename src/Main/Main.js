import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'; 

import Login from '../Login/Login';
import CharacterContainer from '../CharacterContainer/CharacterContainer';
import MovieContainer from '../MovieContainer/MovieContainer';

class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      urls: [],
    }
    this.viewCharacters = this.viewCharacters.bind(this);
  }

  componentDidMount(){
    this.fetchMovies('https://swapi.co/api/films/');
  }

  viewCharacters(id) {
    const urls = this.findCharacters(id);
    
    this.setState({
      urls
    });

    this.props.history.push('/movies/' + id)
  }

  findCharacters(id) {
    return this.state.movies.find(movie => movie.episode_id === id)
      .characters;
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
          <Route path="/movies">
            <CardContainer movies={this.state.movies} />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default Main;