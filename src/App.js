import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route exact patch="/" component={ Login } />
      <Route exact patch="/carteira" component={ wallet } />
    </Switch>
  );
}

export default App;
