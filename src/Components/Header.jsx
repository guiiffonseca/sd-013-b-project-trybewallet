import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.totalDespesas = this.totalDespesas.bind(this);
  }

  totalDespesas() {
    const { expenses } = this.props;
    return expenses.reduce((acc, { currency, value, exchangeRates }) => {
      const converter = value * exchangeRates[currency].ask; // utilizado chaves da prórpia API.
      console.log(converter);
      return acc + converter;
    }, 0);
  }

  render() {
    const { email } = this.props;
    const totalDespesas = this.totalDespesas();
    return (
      <header>
        <h1>TrybeWallet</h1>
        <p data-testid="email-field">
          { `Email: ${email}` }
        </p>
        <p data-testid="total-field">
          Total de despesas:
          {totalDespesas.toFixed(2)}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, null)(Header);
