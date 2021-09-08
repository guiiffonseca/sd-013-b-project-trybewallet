import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  const history = useHistory();
  return (
    <Switch>
      <Route exact path="/" component={ () => <Login history={ history } /> } />
      <Route exact path="/carteira" component={ Wallet } />
    </Switch>
  );
}

export default App;
