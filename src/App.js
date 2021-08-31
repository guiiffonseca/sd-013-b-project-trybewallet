import React from 'react';
import { Route } from 'react-router-dom';

function App() {
  return (
    <switch>
      <Route path="/" component={ Login } />
    </switch>
  );
}

export default App;
