import React from 'react';

function Card(props) {
  return(
    <div>
      <p>{props.movie.title}</p>
      <p>{props.movie.episode_id}</p>
      <p>{props.movie.release_date}</p>   
    </div>
  )
}

export default Card;