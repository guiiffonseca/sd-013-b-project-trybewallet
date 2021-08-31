import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route component={ Login } exact path="/" />
        <Route component={ Wallet } path="/carteira" />
      </Switch>
    );
  }
}
