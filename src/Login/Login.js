import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      fields: {
        user: '',
        quote: '',
        ranking: 'Novice',
      },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.id] = e.target.value;

    this.setState({
      fields
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.validateForm()) {
      this.clearFields();
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let isFormValid = true;

    if (!fields.user) {
      isFormValid = false;
      errors.user = " Please enter a username to continue.";
    }

    if(!fields.quote) {
      isFormValid = false;
      errors.quote = " Please enter a Star Wars quote to continue.";
    }

    this.setState({
      errors: errors
    })

    return isFormValid;
  }

  clearFields() {
    const fields = {
      user: '',
      quote: ''
    };

    this.setState({
      fields: fields 
    });
  }

  render() {

    return (
      <div className="modal">
        <form onSubmit={e => this.handleSubmit(e)}>
          <h3>Log in. Or do not log in. There is no try.</h3>
          <label for="user">Username</label> 
          <input onChange={e => this.handleChange(e)}
                 value={this.state.fields.user}
                 id="user" />
          <div className="error-message">
            <p>{this.state.errors.user}</p>
          </div>
          <label for="quote">Favorite Star Wars Quote</label>
          <input onChange={e => this.handleChange(e)}
                 value={this.state.fields.quote}
                 id="quote" />
          <div className="error-message">
            <p>{this.state.errors.quote}</p>
          </div>
          <label for="quote">Familiarity with Star Wars</label>
          <select onChange={e => this.handleChange(e)}
                  id="ranking"
                  value={this.state.ranking}>
            <option>Novice</option>
            <option>Intermediate</option>
            <option>Expert</option>
          </select>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    )
  }
}

export default Login;