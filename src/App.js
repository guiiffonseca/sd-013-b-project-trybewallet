import React from 'react';
import { Route } from 'react-router';
import Login from './pages/Login';

function App() {
  return (
    <div>
      Hello, TrybeWallet!
      <switch>
        <Route exact path="/" component={ Login } />
      </switch>
    </div>
  );
}

export default App;
