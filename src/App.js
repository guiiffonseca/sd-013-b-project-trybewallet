import React from 'react';
import { Route } from 'react-router';

import Login from './pages/Login';

function App() {
  return (
    <Route path="/" component={ Login } />
  );
}

export default App;
