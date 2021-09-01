import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {
  return (
    <div>
      <Switch>
        <Route patch="/" component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
