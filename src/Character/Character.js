import React, { Component } from 'react';

import './Character.css'

class Character extends Component {
  constructor(props){
    super(props);
    this.state = {
      homeworld: '',
      population: 0,
      species: '',
      films: []
    }
  }

  componentDidMount() {
    this.fetchHomeworld(this.props.character.homeworld);
    this.fetchSpecies(this.props.character.species[0]);
    this.fetchFilms(this.props.character.films);
  }

  async fetchHomeworld(url) {
    let data = await fetch(url);
    data = await data.json();

    this.setState({
      homeworld: data.name,
      population: data.population
    });
  }

  async fetchSpecies(url) {
    let data = await fetch(url);
    data = await data.json();

    this.setState({
      species: data.name
    })
  }

  async fetchFilms(list) {
    let films = await Promise.all(
      list.map(async url => {
        let film = await fetch(url);
        return film.json();
      })
    )
    console.log(films)

    this.setState({
      films
    })
  }

  renderFilms() {
    return this.state.films.map((film, index) => {
      return <li key={film.release_date}>{film.title}</li>
    });
  }

  render() {
    const { name } = this.props.character;
    const { homeworld, population, species } = this.state;
 

    return(
      <article className="card">
        <h2>{name}</h2>
        <li><span>Homeworld: </span>{homeworld}</li>
        <li><span>Population: </span>{population}</li>
        <li><span>Species: </span>{species}</li>
        <li><span>Films:</span></li>
        <div className="character-films-container">
          {this.renderFilms()}
        </div>
        <button className="favorites-btn">Favorite</button>
      </article>
    ) 
  }
}

export default Character;