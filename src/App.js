import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/carteira" component={ Wallet } />
        <Route patch="/" component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
