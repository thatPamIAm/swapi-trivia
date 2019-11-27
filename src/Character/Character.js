import React from 'react';

function Character(props) {
  const {name} = props.character;

  return(
    <article className="card">
      <h2>{name}</h2>
    </article>
  )
}

export default Character;