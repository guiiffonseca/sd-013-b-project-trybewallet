import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    const { expenses } = this.props;
    let total = 0;

    expenses.forEach(({ value, currency, exchangeRates }) => {
      total += value * exchangeRates[currency].ask;
    });
    return parseFloat(total).toFixed(2);
  }

  render() {
    const { email } = this.props;

    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">
          { `Despesa Total: R$ ${this.totalExpenses()}` }
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}
Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
