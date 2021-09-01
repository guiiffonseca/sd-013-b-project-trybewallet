import React from 'react';
import PropTypes from 'prop-types';

import walletimg from '../images/wallet.png';

class Header extends React.Component {
  render() {
    const { email, totalExpenses } = this.props;
    return (
      <div className="header">
        <div className="header-logo">
          <img src={ walletimg } alt="Wallet Logo" />
          <h1 className="header-title">Trybe Wallet</h1>
        </div>
        <div className="header-email">
          <h3 className="header-info">
            {'Email: '}
            <span data-testid="email-field">{ email }</span>
          </h3>
        </div>
        <div className="header-expenses">
          <h3 className="header-info">
            {'Despesa Total: R$ '}
            <span data-testid="total-field">
              { parseFloat((Number(totalExpenses)).toFixed(2)) }
            </span>
            <span data-testid="header-currency-field">{' BRL'}</span>
          </h3>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number.isRequired,
};

export default Header;
