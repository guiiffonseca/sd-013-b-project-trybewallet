import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderForm from './HeaderForm';

class Header extends React.Component {
  sumExpenses() {
    const { expenses } = this.props;

    return expenses.reduce((acc, expense) => {
      const { currency, value, exchangeRates } = expense;
      const { ask } = exchangeRates[currency];
      const askNumber = parseFloat(ask);
      const valueNumber = parseFloat(value);
      acc += Math.round((valueNumber * askNumber) * 100) / 100;
      return acc;
    }, 0);
  }

  render() {
    const { email } = this.props;

    return (
      <header>
        <h1>TrybeWallet</h1>
        <span data-testid="email-field">{email}</span>
        <span
          data-testid="total-field"
        >
          { this.sumExpenses() }
        </span>
        <span data-testid="header-currency-field">BRL</span>
        <HeaderForm />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
