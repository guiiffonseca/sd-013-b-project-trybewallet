import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import Header from './Components/Header';

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={ Login }
      />
      <Route
        path="/carteira"
        component={ Wallet }
      />
      <Route
        path="/header"
        component={ Header }
      />
    </Switch>
  );
}

export default App;
