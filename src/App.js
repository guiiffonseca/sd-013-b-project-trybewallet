import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/wallet" render={ Wallet } />
        <Route exact path="/" render={ Login } />
      </Switch>
    </div>
  );
}

export default App;
