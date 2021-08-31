import React from 'react';
import PropTypes from 'prop-types';

export default class WalletHeader extends React.Component {
  render() {
    const { user: { email }, total, moeda } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">
            Email:
            {' '}
            {email}
          </span>
          {' '}
          |
          {' '}
          <span data-testid="total-field">
            Despesa Total: R$
            {total}
          </span>
          {' '}
          <span data-testid="header-currency-field">
            {moeda}
          </span>
        </header>
      </div>);
  }
}

WalletHeader.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  total: PropTypes.number.isRequired,
  moeda: PropTypes.string.isRequired,
};
