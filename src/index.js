import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Wallet from './pages/Wallet';
import store from './store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      <Switch>
        <Route exact path="/wallet" component={ Wallet } />
        <Route exact path="/" component={ App } />
      </Switch>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
