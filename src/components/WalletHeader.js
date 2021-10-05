import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const WalletHeader = ({ id, email, currencies, calculateTotalValue }) => (
  <header>
    <p>{id}</p>
    <p data-testid="email-field">{email}</p>
    <p data-testid="header-currency-field">{currencies}</p>
    <p data-testid="total-field">{calculateTotalValue().toFixed(2)}</p>
  </header>
);

WalletHeader.propTypes = {
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  currencies: PropTypes.string.isRequired,
  calculateTotalValue: PropTypes.func.isRequired,
};

export default WalletHeader;
