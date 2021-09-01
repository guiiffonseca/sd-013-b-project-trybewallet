import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  totalExpenses() {
    const { expenses } = this.props;
    return expenses.reduce((acc, { currency, value, exchangeRates }) => {
      const converted = value * exchangeRates[currency].ask;
      return acc + converted;
    }, 0);
  }

  render() {
    const { email } = this.props;
    const allExpenses = this.totalExpenses();
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{allExpenses.toFixed(2)}</p>
        <p data-testid="header-currency-field">BRL</p>
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
