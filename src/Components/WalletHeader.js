import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  sum() {
    const { expenses } = this.props;
    if (expenses.length !== 0) {
      const total = expenses.reduce((acc, { value, currency, exchangeRates }) => (
        acc + (Number(value) * exchangeRates[currency].ask)
      ), 0);
      return total.toFixed(2);
    }
    return 0;
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        TrybeWallet
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{this.sum()}</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(WalletHeader);

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
