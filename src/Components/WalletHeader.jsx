import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  render() {
    const { email, actualCurrency, actualExpenses } = this.props;
    const totalCost = actualExpenses.reduce((acc, act) => (
      acc + Number(act.value) * act.exchangeRates[act.currency].ask
    ), 0);
    return (
      <header>
        <h2 data-testid="email-field">
          email:
          { email }
        </h2>
        <h2 data-testid="total-field">
          Valor Total:
          { totalCost }
          BRL
        </h2>
        <h2 data-testid="header-currency-field">
          Câmbio:
          { actualCurrency }
        </h2>
      </header>
    );
  }
}

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
  actualCurrency: PropTypes.string.isRequired,
  actualExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,

};

const mapStateToProps = (state) => ({
  actualExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(WalletHeader);
