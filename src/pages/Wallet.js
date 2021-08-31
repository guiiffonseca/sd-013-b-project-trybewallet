import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import NewExpense from '../components/NewExpense';
import Table from '../components/Table';

class Wallet extends Component {
  totalExpenses() {
    const { expenses } = this.props;
    const total = expenses
      .reduce((acc, expense) => acc
      + parseFloat(expense.value)
      * parseFloat(expense.exchangeRates[expense.currency].ask), 0);
    return (Math.floor(total * 100) / 100);
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <Header
          email={ email }
          total={ this.totalExpenses() }
          currency="BRL"
        />
        <NewExpense />
        <Table expenses={ expenses } />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
