import React from 'react';

import './Card.css';

function Card(props) {
  return(
    <article className="movie-card">
      <h2>{props.movie.title}</h2>
      <h4>Episode {props.movie.episode_id}</h4>
      <h4>{props.movie.release_date}</h4>
    </article>
  )
}

export default Card;