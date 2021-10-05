import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </>
    );
  }
}

// CRIEI UM NOVO PR, POIS OS PR 112 E 138, NÃO ESTAVAM MAIS RODANDO O EVALUETOR //

export default App;
