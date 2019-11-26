import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Card from '../Card/Card';
import './CardContainer.css'

function CardContainer(props) {
  const movies = props.movies.map((movie, index) => {
    return <Card movie={movie} key={index}/>
  });

  return (
    <section className="movies-container">
      {movies}
    </section>
  )
}

export default CardContainer;