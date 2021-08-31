import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Wallet from './Components/Wallet';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/cateira" component={ Wallet } />
    </Switch>
  );
}

export default App;
