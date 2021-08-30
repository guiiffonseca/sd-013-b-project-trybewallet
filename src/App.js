import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={ store }>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ Login } />
              <Route exact path="/wallet" component={ Wallet } />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}
export default App;
