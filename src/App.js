import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App(props) {
  const { email } = props;
  return (
    <Switch>
      <Route path="/carteira" component={ Wallet } />
      <Route exact path="/">
        { (email !== '') ? <Redirect to="/carteira" /> : <Login /> }
      </Route>
    </Switch>
  );
}

const mapStateToProps = ({ user: { email } }) => ({
  email,
});

App.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(App);
