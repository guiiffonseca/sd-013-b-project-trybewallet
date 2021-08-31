import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path='/' componet={ Login } />
      </div>
    );
  }
}

export default App;
