import React from 'react';

import './Movie.css';

function Movie (props) {
  const {title, episode_id, release_date} = props.movie;

  return (
    <article className="card">
      <h2>{title}</h2>
      <h4>Episode {episode_id}</h4>
      <h4>{release_date}</h4>
      <button className="characters-btn"
              onClick={() => props.viewCharacters(episode_id)}>View Characters</button>
    </article>
  )
}

export default Movie;