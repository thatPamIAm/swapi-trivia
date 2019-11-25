import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Card from '../Card/Card';

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: null
    }
  }

  componentDidMount(){
    this.fetchMovies('https://swapi.co/api/films/');
  }

  async fetchMovies(url) {
    let data = await fetch(url);
    data = await data.json();
    data.results.sort((a, b) => a.episode_id - b.episode_id);

    this.setState({
      movies: data.results
    });
  }

  render() {
    if (!this.state.movies) {
      return (
        <span>Loading...</span>
      )
    }

    const movies = this.state.movies.map((movie, index) => {
      return <Card movie={movie} key={index}/>
    })

    return (
      <section className="movies-container">
        {movies}
      </section>
    )
  } 
}

export default Movies;