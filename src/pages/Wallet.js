import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import WalletForm from '../components/WalletForm';
import '../styles/wallet.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.totalExpensesValue = this.totalExpensesValue.bind(this);
  }

  totalExpensesValue() {
    const { totalExpenses } = this.props;
    let total = 0;

    const toSumTotal = Object.values(totalExpenses);

    toSumTotal.forEach((element) => {
      const { value, currency, exchangeRates } = element;
      total += Number(value) * Number(exchangeRates[currency].ask);
    });

    return total;
  }

  render() {
    const { userEmail } = this.props;
    return (
      <div className="main-wallet-div">
        <div className="wallet-header">
          HEADER
          <div className="email-header">
            <h5 data-testid="email-field">{userEmail}</h5>
          </div>
          <div className="total-value">
            <h5 data-testid="total-field">{ this.totalExpensesValue().toFixed(2) }</h5>
          </div>
          <div className="currency-field" data-testid="header-currency-field">
            <h5>BRL</h5>
          </div>
        </div>
        <WalletForm props={ this.props } />
      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.func,
  totalExpenses: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  totalExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
