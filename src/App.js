import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={ () => <Login /> } />
      </Switch>
    </div>
  );
}

export default App;
