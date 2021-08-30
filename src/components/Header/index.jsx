import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Header = ({ email }) => (
  <header>
    <span data-testid="email-field">
      Email:
      {' '}
      { email }
    </span>
    <span data-testid="total-field">Despesa total: 0</span>
    <span data-testid="header-currency-field">BRL</span>
  </header>
);

const mapStateToProps = ({ user: { email } }) => ({
  email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
