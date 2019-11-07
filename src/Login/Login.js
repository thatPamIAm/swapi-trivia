import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      favoriteQuote: '',
      ranking: 'Novice'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  handleSubmit(e) {

  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input onChange={e => this.handleChange(e)}
               value={this.state.user}
               name="user" />
        <input onChange={e => this.handleChange(e)}
               value={this.state.favoriteQuote}
               name="favoriteQuote" />
        <select onChange={e => this.handleChange(e)} 
                name="ranking"
                value={this.state.ranking}>
          <option>Novice</option>
          <option>Intermediate</option>
          <option>Expert</option>
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    )
  }
}

export default Login;