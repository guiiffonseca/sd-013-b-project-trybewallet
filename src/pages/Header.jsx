import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setExpenses } from '../actions';
import '../styles/Wallet.css';

class Header extends React.Component {
  render() {
    return (
      <h1 className="header">TrybeWallet</h1>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpenses: (payload) => dispatch(setExpenses(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
