import React, { Component } from 'react';
import Character from '../Character/Character';

import './CharacterContainer.css'
class CharacterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    this.fetchCharacters(this.props.characters)
  }

  async fetchCharacters(list) {
  let characters = await Promise.all(
    list.map(async url => {
      let character = await fetch(url);
      return character.json()
    })
  )

  this.setState({
    characters: characters
  })
 }

  render() {
    const characters = this.state.characters.map((character, index) => {
      return <Character character={character} key={index} />
    });

    return (
      <section className="container">
        {characters}
      </section>
    )  
  }
}

export default CharacterContainer;