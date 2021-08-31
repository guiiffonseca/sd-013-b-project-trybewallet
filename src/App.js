import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        {/* <Route path="/wallet" component={ Wallet } /> */}
        {' '}
        {/* letting this commented for further implementation. */}
      </Switch>
    </div>);
}

export default App;
