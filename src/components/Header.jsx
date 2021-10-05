import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  calculateTotalExpenses() {
    const { expenses } = this.props;
    const totalExpenses = expenses.reduce((
      acc, { exchangeRates, currency, value },
    ) => acc + exchangeRates[currency].ask * value, 0);
    return totalExpenses.toFixed(2);
  }

  render() {
    const { email } = this.props;
    const currencyField = 'BRL';
    return (
      <div>
        <span data-testid="email-field">
          { `email: ${email}` }
          {' '}
        </span>
        <span data-testid="total-field">
          Despesa total: R$
          { this.calculateTotalExpenses() }
        </span>
        <span data-testid="header-currency-field">
          { `Câmbio: ${currencyField}` }
        </span>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.number.isRequired,
};

const mapStateToProp = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProp)(Header);
