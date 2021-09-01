import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HeaderWallet extends Component {
  renderHeader() {
    const { email } = this.props;
    return (
      <div className="header-container">
        <span data-testid="email-field">{`Email: ${email}`}</span>
        <span data-testid="total-field">Despesa total: R$ 0,00</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }

  render() {
    return this.renderHeader();
  }
}

HeaderWallet.propTypes = {
  email: PropTypes.string.isRequired,
};
