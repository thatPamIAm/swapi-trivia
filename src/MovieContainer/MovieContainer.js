import React from 'react';

import Movie from '../Movie/Movie';
import './MovieContainer.css'

function MovieContainer(props) {
  const {viewCharacters} = props;

  const movies = props.movies.map((movie, index) => {
    return <Movie movie={movie} key={index} viewCharacters={viewCharacters}/>
  });

  return (
    <section className="container">
      {movies}
    </section>
  )   
}

export default MovieContainer;
