import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Login from './pages/Login';

export default class App extends Component {
  render() {
    return (
      <Route component={ Login } path="/" />
    );
  }
}

