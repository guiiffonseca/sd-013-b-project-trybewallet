import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login/Login';

function App() {
  return (
    <Switch>
      <Route path="/" render={ (props) => <Login { ...props } /> } />
    </Switch>
  );
}

export default App;
