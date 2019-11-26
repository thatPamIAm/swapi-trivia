import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Main from '../Main/Main';
import Header from '../Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: null,
    }
    this.logInUser = this.logInUser.bind(this);
  }

  logInUser(userInfo) {
    this.setState({
      userInfo,
    });
    this.props.history.push('/movies');
  }

  render() {
    return (
      <div className="App">
        {this.state.userInfo && <Header user={this.state.userInfo} />}
        <Main logInUser={this.logInUser} />
      </div>
    )
  }
}

export default withRouter(App);