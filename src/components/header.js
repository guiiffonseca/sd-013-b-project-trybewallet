import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  value() {
    const { expenses } = this.props;
    let sum = 0;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      sum += Number(value) * Number(exchangeRates[currency].ask);
    });
    return sum;
  }

  render() {
    const { user } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ user }</p>
        <p data-testid="total-field">{ this.value().toFixed(2)}</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
