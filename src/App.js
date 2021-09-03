import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import renderWithRouter from './renderWithRouter';
import Login from './pages/Login';

export default class App extends Component {
  render() {
    return (
      <div>
        <renderWithRouter>
          <Switch>
            <Route exact path="/" component={ Login } />
          </Switch>
        </renderWithRouter>
      </div>
    );
  }
}
