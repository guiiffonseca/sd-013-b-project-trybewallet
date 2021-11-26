import React from 'react';
import { Route } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      Hello, TrybeWallet!
      <switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
      </switch>
    </div>
  );
}

export default App;
