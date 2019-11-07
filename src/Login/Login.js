import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      quote: '',
      ranking: 'Novice'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id] : e.target.value
    });
  }

  handleSubmit(e) {

  }

  render() {
    return (
      <div className="modal">
        <form onSubmit={e => this.handleSubmit(e)}>
          <h3>Log in. Or do not log in. There is no try.</h3>
          <label for="user">Username</label>
          <input onChange={e => this.handleChange(e)}
                 value={this.state.user}
                 id="user"/>
          <label for="quote">Favorite Star Wars Quote</label>
          <input onChange={e => this.handleChange(e)}
                 value={this.state.favoriteQuote}
                 id="quote"/>
          <label for="quote">Familiarity with Star Wars</label>
          <select onChange={e => this.handleChange(e)}
                  id="ranking"
                  value={this.state.ranking}>
            <option>Novice</option>
            <option>Intermediate</option>
            <option>Expert</option>
          </select>
          <button type="submit" disabled>SUBMIT</button>
        </form>
      </div>
    )
  }
}

export default Login;