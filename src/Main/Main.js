import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'; 
import Login from '../Login/Login';
import Movies from '../Movies/Movies';

function Main(props) {
  const {logInUser} = props

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Login logInUser={logInUser} />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
      </Switch>
    </div>
  )

}

export default Main;