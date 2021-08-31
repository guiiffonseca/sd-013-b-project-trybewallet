import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
        { expensesTotal }
      </span>
    </div>
  </header>
);

const mapStateToProps = ({ user: { email }, wallet: { expensesTotal } }) => ({
  email,
  expensesTotal,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expensesTotal: PropTypes.number,
};

Header.defaultProps = {
  expensesTotal: 0,
};

export default connect(mapStateToProps, null)(Header);
