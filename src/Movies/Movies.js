import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Card from '../Card/Card';
import './Movies.css'

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