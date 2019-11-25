import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Main from '../Main/Main';

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
            <Main logInUser={this.logInUser} />
          </div>
        )
  }
}

export default withRouter(App);