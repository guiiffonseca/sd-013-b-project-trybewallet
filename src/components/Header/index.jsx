import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import formatCurrency from '../../utils/formatCurrency';

const Header = ({ email, expensesTotal }) => (
  <header>
    <span data-testid="email-field">
      Email:
      {' '}
      { email }
    </span>
    <div>
      Despesa total:
      <span data-testid="header-currency-field">BRL</span>
      <span data-testid="total-field">
        { formatCurrency(expensesTotal) }
      </span>
    </div>
  </header>
);

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expensesTotal: expenses.reduce(
    (acc, { value, currency, exchangeRates }) => (
      acc + parseFloat(value * exchangeRates[currency].ask)
    ), 0,
  ),
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expensesTotal: PropTypes.number,
};

Header.defaultProps = {
  expensesTotal: 0,
};

export default connect(mapStateToProps, null)(Header);
