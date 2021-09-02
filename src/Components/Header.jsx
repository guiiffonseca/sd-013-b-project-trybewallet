import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import WalletLogo from '../Images/wallet.png';
import '../CSS/header.css';

class Header extends React.Component {
  constructor() {
    super();

    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    const { globalState: { wallet } } = this.props;
    const wExpense = wallet.expenses;
    let t = 0;
    if (wExpense) {
      wExpense.forEach((e) => { t += e.value * e.exchangeRates[e.currency].ask });
      return t;
    }
    return t;
  }

  render() {
    const { email } = this.props;
    return (
      <header className="head">
        <img src={ WalletLogo } alt="carteira" />
        <h2 data-testid="email-field">{ email }</h2>
        <h3 data-testid="total-field">
          Total Expenses:
          { this.totalExpenses() }
        </h3>
        <h4 data-testid="header-currency-field">BRL</h4>
      </header>
    );
  }
}

Header.propTypes = {
  email: propTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  globalState: state,
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
