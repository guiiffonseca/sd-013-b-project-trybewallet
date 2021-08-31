import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AddExpense from '../components/AddExpense';
import ExpenseBoard from '../components/ExpenseBoard';

class Wallet extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const convertedValue = expenses.map(
      (expense) => expense.value * expense.exchangeRates[expense.currency].ask,
    );
    let total = 0;
    if (convertedValue.length === 0) {
      return (
        <>
          <header>
            <p data-testid="email-field">{ email }</p>
            <p data-testid="total-field">
              { total }
              {' '}
              <span data-testid="header-currency-field">BRL</span>
              {' '}
            </p>
          </header>
          <AddExpense />
          <ExpenseBoard />
        </>);
    } total = convertedValue.reduce((acc, curr) => acc + curr).toFixed(2);
    return (
      <>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">
            { total }
            <span data-testid="header-currency-field"> BRL</span>
          </p>
        </header>
        <AddExpense />
        <ExpenseBoard
          expenses={ expenses }
        />
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

const mapStateToProps = ({
  user: { email },
  wallet: { expenses },
}) => ({ email, expenses });

export default connect(mapStateToProps, null)(Wallet);
