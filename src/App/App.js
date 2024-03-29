import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Main from '../Main/Main';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: null,
    }
    this.logInUser = this.logInUser.bind(this);
    this.logOutUser = this.logOutUser.bind(this);
  }

  logInUser(userInfo) {
    this.setState({
      userInfo
    });

    this.props.history.push('/movies');
  }

  logOutUser() {
    this.setState({
      userInfo: null
    });

    this.props.history.push('/')
  }

  render() {
    return (
      <div className="App">
        <div className="space-holder">
        {this.state.userInfo &&
          <Header user={this.state.userInfo}
                  logOutUser={this.logOutUser} /> }
          </div>
        <Main logInUser={this.logInUser} />
      </div>
    )
  }
}

export default withRouter(App);