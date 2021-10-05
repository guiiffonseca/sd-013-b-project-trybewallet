import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();

    this.sumValues = this.sumValues.bind(this);
  }

  sumValues() {
    const { expenses } = this.props;
    return expenses.reduce((acc, { value, exchangeRates, currency }) => (
      acc + exchangeRates[currency].ask * value
    ), 0);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{email}</p>

        <p>
          Total gasto: R$
          <span data-testid="total-field">{` ${this.sumValues()}`}</span>
        </p>
        <p data-testid="header-currency-field">BRL</p>

      </header>
    );
  }
}
Header.propTypes = {
  email: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf.isRequired,

};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
