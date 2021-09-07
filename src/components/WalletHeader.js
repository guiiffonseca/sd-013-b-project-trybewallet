import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  totalExpense() {
    const { expenses } = this.props;
    let TOTAL = 0;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      TOTAL += value * exchangeRates[currency].ask;
    });
    return parseFloat(TOTAL);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">
          { this.totalExpense().toFixed(2) }
        </p>
        <p data-testid="header-currency-field"> BRL </p>
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

export default connect(mapStateToProps)(Header);
