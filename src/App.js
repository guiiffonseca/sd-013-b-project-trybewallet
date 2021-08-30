import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <>
      <div>
        <h1>Exercise_Forms_Redux</h1>
      </div>
      <Switch>
        <Route exact path="/" component={ Login } />
        {/* <Route path="/professionalForm" component={ ProfessionalForm } /> */}
        {/* <Route path="/formDisplay" component={ FormDataDisplay } /> */}
        {/* <Route path="*" component={ NotFound } /> */}
      </Switch>
    </>
  );
}

export default App;
